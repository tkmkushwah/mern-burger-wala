import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mbaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a>
          <AiFillYoutube />
        </a>
        <a >
          <AiFillInstagram />
        </a>
        <a >
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
