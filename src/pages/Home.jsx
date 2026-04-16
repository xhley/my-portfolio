import React from "react";

export default function Home() {
  return (
    <section className="hero-split">
      {/* LEFT SIDE */}
      <div className="hero-image">
          { <p className="hero-tagline">
          digital diary of a developer ✿
        </p> }   

        <img
          src="/my-portfolio/profile.jpg"
          alt="Ashley"
          className="hero-photo"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-content">
        <h1>Hi, I’m Ashley Flores</h1>

        <p className="hero-text">
          Computer science student interested in web development, UI design,
          and building creative projects with code.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}