"use client";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      <nav className="container nav" aria-label="Primary navigation">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-symbol gradient-text">{"MK"}</span>
          <span className="brand-name">{"Maruti Khapare"}</span>
        </a>
        <div id="menu" className={open ? "menu open" : "menu"}>
          <a href="#home" className="active" onClick={() => setOpen(false)}>
            {"Home"}
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            {"About"}
          </a>
          <a href="#services" onClick={() => setOpen(false)}>
            {"Expertise"}
          </a>
          <a href="#work" onClick={() => setOpen(false)}>
            {"Work"}
          </a>
          <a href="#experience" onClick={() => setOpen(false)}>
            {"Experience"}
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            {"Contact"}
          </a>
        </div>
        <a
          className="btn btn-main"
          href="#contact"
          data-open-booking="true"
          onClick={() => setOpen(false)}
        >
          {"Let’s Talk ↗"}
        </a>
        <button
          className="mobile-toggle"
          id="mobile-toggle"
          aria-label="Toggle navigation"
          aria-controls="menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {"☰"}
        </button>
      </nav>
    </header>
  );
}
