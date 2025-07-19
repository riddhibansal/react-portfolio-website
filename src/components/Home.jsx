import React from "react";

function Home() {
  const handleViewWork = () => {
    window.open("https://github.com/riddhibansal", "_blank");
  };

  return (
    <section id="home">
      <h2>Welcome!</h2>
      <p>
        Hi, I'm Riddhi Bansal. I build modern, responsive web applications using
        React.
      </p>
      <a
        href="https://github.com/riddhibansal"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          background: "#282c34",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        View My Work
      </a>
    </section>
  );
}
export default Home;