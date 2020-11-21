import React from "react";
import { Wrapper } from "./styles/footer";

export default function Footer() {
  return (
    <Wrapper className="section-center">
      <a
        href="https://github.com/AhmadJaber"
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="emoji" role="img" aria-label="developer">
          👨
        </span>
        Made By Ashik Ahmad Jaber
      </a>

      <a
        href="https://developer.github.com/v3/#current-version"
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="emoji" role="img" aria-label="data">
          📊
        </span>
        Data Source
      </a>
    </Wrapper>
  );
}
