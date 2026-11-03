export default function Footer() {
  return (
    <footer>
      <div className="container foot">
        <span>
          {"© "}
          <span id="year">{new Date().getFullYear()}</span>
          {" Maruti Khapare · Built for growth."}
        </span>
        <span>
          <a
            href="https://www.behance.net/NovaNest"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Behance"}
          </a>
          <a
            href="https://www.linkedin.com/in/maruti-khapare/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"LinkedIn"}
          </a>
          <a href="mailto:makhapare@gmail.com">{"Email"}</a>
        </span>
      </div>
    </footer>
  );
}
