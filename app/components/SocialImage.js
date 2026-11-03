export default function SocialImage({ label, title, subtitle }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px",
        background: "linear-gradient(120deg, #f3e7ff, #fff1e8)",
        color: "#20265b",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: 5,
          color: "#8b45c6",
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 76,
          lineHeight: 1.1,
          fontWeight: 800,
          maxWidth: 1040,
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "2px solid #d7c7ef",
          paddingTop: 28,
          fontSize: 26,
        }}
      >
        <span>Maruti Khapare</span>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}
