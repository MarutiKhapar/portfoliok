"use client";

import { useState } from "react";

function tomorrowInIndia() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(Date.now() + 86400000));
}

export default function BookingForm() {
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);
  const [booked, setBooked] = useState(false);

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);
    setStatus("Checking availability…");
    try {
      const response = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Unable to book this slot.");
      setBooked(true);
      setStatus(
        "Booked! A calendar invitation has been sent to your email. Please check your inbox.",
      );
    } catch (error) {
      setStatus(error.message || "Booking could not be completed.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="msg bot">
      <p>
        Book a 30-minute introductory call with Maruti. Pick a date and time
        (India Standard Time).
      </p>
      <form className="booking-form" onSubmit={submit}>
        <label>
          Your name
          <input
            name="name"
            required
            minLength={2}
            maxLength={90}
            autoComplete="name"
          />
        </label>
        <label>
          Your email
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            autoComplete="email"
          />
        </label>
        <label>
          Date (IST)
          <input type="date" name="date" min={tomorrowInIndia()} required />
        </label>
        <label>
          Time (IST)
          <input
            type="time"
            name="time"
            min="09:00"
            max="17:30"
            step="1800"
            defaultValue="11:00"
            required
          />
        </label>
        <label>
          What would you like to discuss?
          <textarea
            name="topic"
            rows={2}
            maxLength={600}
            placeholder="Growth strategy, hiring, collaboration…"
          />
        </label>
        <div className="booking-note">
          Available Mon–Fri, with 30-minute slots starting from 9 AM to 5:30 PM
          IST, subject to Maruti’s calendar. A calendar invitation is sent only
          if booking succeeds.
        </div>
        <button type="submit" disabled={pending || booked}>
          {booked ? "Booked" : pending ? "Checking…" : "Confirm booking"}
        </button>
        <div className="booking-status" role="status" aria-live="polite">
          {status}
        </div>
      </form>
    </div>
  );
}
