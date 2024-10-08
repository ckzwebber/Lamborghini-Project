import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
        <h1>CONTACT OFFICIAL LAMBORGHINI</h1>
        <button>
          <a
            target="_blank"
            href="https://www.lamborghini.com/en-en"
            className="contact-button"
            rel="noopener noreferrer"
          >
            <span className="spn2">WEBSITE</span>
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UC9DXZC8BCDOW6pYAQKgozqw"
            className="contact-button"
            rel="noopener noreferrer"
          >
            <span className="spn2">YOUTUBE</span>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/automobili-lamborghini-s-p-a-/"
            className="contact-button"
            rel="noopener noreferrer"
          >
            <span className="spn2">LINKEDIN</span>
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@lamborghini?lang=en"
            className="contact-button"
            rel="noopener noreferrer"
          >
            <span className="spn2">TIKTOK</span>
          </a>
        </button>
        <p className="contact-me">
          If you want to talk to whoever created this site,{" "}
          <a
            href="https://webberportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
          .
        </p>
    </div>
  );
}
