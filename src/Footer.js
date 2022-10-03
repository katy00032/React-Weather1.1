import React from "react";
import a_cat from "./images/leaf.png";

export default function Footer() {
  let urlLinkedin = "https://www.linkedin.com/in/kateryna-vanina-3491941b0/";
  let urlGithub = "https://github.com/katy00032/React-Weather1.1-Js";

  return (
    <div className="App">
      <footer>
        <div className="container">
          <div className="footer-container">
            <div className="d-flex justify-content-center">
              <div className="ml-5 mt-3">
                <img
                  src={a_cat}
                  alt="Logo, black cat"
                  title="Logo, black cat"
                  className="logo"
                />
                <span className="logoTextSpan ml-3 mr-5">
                  Kateryna Vanina 2022
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex mt-3 mb-3">
                <a
                  href={urlLinkedin}
                  className="link"
                  title="Linkedin Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                  <span className="sr-only">Linkedin</span>
                </a>
              </div>
              <div className="d-flex mr-5 mt-3 mb-3">
                <a
                  href={urlGithub}
                  className="link"
                  title="Github Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                  <span className="sr-only">Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
