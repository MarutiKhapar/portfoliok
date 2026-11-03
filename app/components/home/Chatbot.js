"use client";

import { useEffect, useRef, useState } from "react";
import { getResponse } from "./assistant-data";
import BookingForm from "./BookingForm";

const welcome =
  "Hi, I’m Maruti’s portfolio assistant. Ask me about Maruti’s background, skills, experience, projects, contact details, or resume.";
const suggestions = [
  ["About", "Tell me about Maruti"],
  ["Role", "What does Maruti do?"],
  ["Skills", "What skills does Maruti have?"],
  ["Projects", "What projects has Maruti worked on?"],
  ["Contact", "How can I contact Maruti?"],
  ["Resume", "Show me Maruti's resume"],
];

// Only trusted assistant templates contain links. Visitor messages render as text.
function Reply({ text }) {
  return text
    .split(/(<a href="[^"]+" target="_blank">[^<]+<\/a>)/g)
    .map((part, index) => {
      const match = part.match(
        /^<a href="([^"]+)" target="_blank">([^<]+)<\/a>$/,
      );
      return match ? (
        <a
          key={index}
          href={match[1]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[2]}
        </a>
      ) : (
        part
      );
    });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ sender: "bot", text: welcome }]);
  const area = useRef(null);

  useEffect(() => {
    function openBooking(event) {
      if (
        !(event.target instanceof Element) ||
        !event.target.closest("[data-open-booking]")
      )
        return;
      event.preventDefault();
      setOpen(true);
      setMessages((previous) => [...previous, { booking: true }]);
    }
    document.addEventListener("click", openBooking);
    return () => document.removeEventListener("click", openBooking);
  }, []);

  useEffect(() => {
    if (area.current) area.current.scrollTop = area.current.scrollHeight;
  }, [messages, open]);

  function ask(question) {
    if (!question.trim()) return;
    setMessages((previous) => [
      ...previous,
      { sender: "user", text: question },
      { sender: "bot", text: getResponse(question) },
    ]);
  }

  return (
    <div id="maruti-chatbot">
      <button
        aria-label="Open chatbot"
        aria-expanded={open}
        aria-controls="chatbotBox"
        id="chatbotToggle"
        onClick={() => setOpen((value) => !value)}
      >
        Chat
      </button>
      <div className={open ? "" : "hidden"} id="chatbotBox">
        <div className="chat-header">
          <div>
            <h3>Ask about Maruti</h3>
            <p>
              Answers about Maruti’s work, skills, projects, resume and contact
            </p>
          </div>
          <button
            aria-label="Close chatbot"
            id="chatbotClose"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <div
          className="chat-messages"
          id="chatMessages"
          ref={area}
          aria-live="polite"
        >
          {messages.map((message, index) =>
            message.booking ? (
              <BookingForm key={index} />
            ) : (
              <div key={index} className={"msg " + message.sender}>
                {message.sender === "bot" ? (
                  <Reply text={message.text} />
                ) : (
                  message.text
                )}
              </div>
            ),
          )}
        </div>
        <div className="chat-suggestions">
          {suggestions.map(([label, question]) => (
            <button
              className="chip"
              data-question={question}
              key={label}
              onClick={() => ask(question)}
            >
              {label}
            </button>
          ))}
          <button
            className="chip booking-chip"
            aria-label="Book a call with Maruti"
            data-open-booking="true"
          >
            Book a call
          </button>
        </div>
        <form
          className="chat-form"
          id="chatForm"
          onSubmit={(event) => {
            event.preventDefault();
            ask(input);
            setInput("");
          }}
        >
          <input
            autoComplete="off"
            className="mp-sensitive"
            id="chatInput"
            aria-label="Your question"
            placeholder="Ask something about Maruti..."
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
