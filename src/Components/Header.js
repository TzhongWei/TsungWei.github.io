import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { linkedin, github, email, ResearchGate } = socialMediaUrl;

  // Detect dark mode from system preferences
  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkMediaQuery.matches);

    const handleThemeChange = (e) => setIsDarkMode(e.matches);
    darkMediaQuery.addListener(handleThemeChange);
    return () => darkMediaQuery.removeListener(handleThemeChange);
  }, []);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <NavLink to="/">
          <img
            className="w-14"
            src={isDarkMode ? logos.darkgradient : logos.logogradient}
            alt="logo"
          />
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav
        className={` ${
          !isOpen ? "hidden" : ""
        } text-center md:flex justify-between`}
      >
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggleClass}>
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/publications" onClick={toggleClass}>
              Publications
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggleClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/monologue" onClick={toggleClass}>
              Monologue
            </NavLink>
          </li>
          <li>
            <a
              href={
                "https://drive.google.com/file/d/1msGPdc7rL6rGCHDaJyMitb47ZPbIKgzM/view?usp=sharing"
              }
              target="_blank"
              rel="noreferrer noopener"
              className="pb-1 md:pb-0"
            >
              Resume
            </a>
          </li>
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                className="w-8 h-8"
                width="32"
                height="32"
                viewBox="0 0 177 177"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="88.5"
                  cy="88.5"
                  r="88.5"
                  className="fill-dark-heading dark:fill-light-heading"
                />
                <path
                  d="M44 122 L44 55 L88.5 90 L133 55 L133 122 L111 122 L111 85 L88.5 105 L66 85 L66 122 Z"
                  className="fill-white-heading dark:fill-dark-heading"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href={ResearchGate} target="_blank" rel="noreferrer noopener">
              <svg
                className="w-8 h-8"
                width="32"
                height="32"
                viewBox="0 0 177 177"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="88.5"
                  cy="88.5"
                  r="88.5"
                  className="fill-dark-heading dark:fill-light-heading"
                />
                <text
                  x="88.5"
                  y="100"
                  fontSize="100"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white-heading dark:fill-dark-heading"
                  fontFamily="Arial"
                  fontWeight="bold"
                >
                  R
                </text>
                <text
                  x="125.5"
                  y="50"
                  fontSize="50"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white-heading dark:fill-dark-heading"
                  fontFamily="Arial"
                >
                  G
                </text>
              </svg>
            </a>
          </li>
          <li>
            <a href={linkedin} target="_blank" rel="noreferrer noopener">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0.6C7.05 0.6 0.6 7.05 0.6 15c0 7.95 6.45 14.4 14.4 14.4 7.95 0 14.4-6.45 14.4-14.4C29.4 7.05 22.95 0.6 15 0.6ZM11.475 20.97h-2.92V11.585h2.92V20.97ZM10 10.4325c-0.92 0-1.5165-0.6525-1.5165-1.46 0-0.8235 0.6135-1.4565 1.554-1.4565 0.94 0 1.516 0.633 1.534 1.4565 0 0.8075-0.594 1.46-1.572 1.46ZM22.125 20.97h-2.916v-5.202c0-1.21-0.423-2.032-1.4775-2.032-0.8055 0-1.284 0.5565-1.495 1.092 0 0.158-0.02 0.427-0.02 0.696v5.196h-2.9175v-6.391c0-1.172-0.0375-2.151-0.0765-2.994h2.5335l0.1345 1.3035h0.058c0.384-0.6125 1.325-1.5155 2.899-1.5155 1.9195 0 3.358 1.2855 3.358 4.0495V20.97Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
