import Logo from "../../assets/footer-logo.svg";
import { FaRedditAlien } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";

function Footer() {
  const [hash, setHash] = useState<string>("home");

  const setHashFunction = useCallback(
    () => setHash(window.location.href.split("#")[1] || ""),
    []
  );

  useEffect(() => {
    setHashFunction();
    window.addEventListener("hashchange", setHashFunction);
    return () => window.removeEventListener("hashchange", setHashFunction);
  }, [setHashFunction]);

  return (
    <div className="flex justify-around   font-raleway font-extrabold">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex items-center gap-16">
        <a
          href="#about"
          className={classNames(
            "hover:text-primary transition-color duration-300",
            { "text-primary": hash === "about" }
          )}
        >
          About Us
        </a>
        <a
          href="#roadmap"
          className={classNames(
            "hover:text-primary transition-color duration-300",
            { "text-primary": hash === "roadmap" }
          )}
        >
          Roadmap
        </a>
        <a
          href="#faq"
          className={classNames(
            "hover:text-primary transition-color duration-300",
            { "text-primary": hash === "faq" }
          )}
        >
          FAQs
        </a>
        <a
          href="#contact"
          className={classNames(
            "hover:text-primary transition-color duration-300",
            { "text-primary": hash === "contact" }
          )}
        >
          Contact Us
        </a>
      </div>
      <div className="text-2xl">
        <div className="my-4">
          Contact <span className="text-primary">Us</span>
        </div>
        <div className="flex items-center gap-6 justify-center">
          <a
            href="#telegram"
            className="hover:text-primary transition-color duration-300"
          >
            <FaTelegram />
          </a>
          <a
            href="#reddit"
            className="hover:text-primary transition-color duration-300"
          >
            <FaRedditAlien />
          </a>
          <a
            href="#twitter"
            className="hover:text-primary transition-color duration-300"
          >
            <FiTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
