import classNames from "classnames";
import Logo from "../../assets/logo.svg";
import { Button } from "../ui/button";
import { useCallback, useEffect, useState } from "react";

function NavBar() {
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
    <div className="  flex items-center justify-around bg-transparent absolute top-5 w-full z-10">
      <div>
        <img src={Logo} />
      </div>
      <div className="flex items-center gap-20 font-raleway font-extrabold">
        <a
          className={classNames(
            "hover:text-primary transition-color duration-300",
            { "text-primary": hash === "home" }
          )}
          href="#home"
        >
          Home
        </a>
        <a
          className={classNames(
            "hover:text-primary transition-color duration-300",
            { "text-primary": hash === "about" }
          )}
          href="#about"
        >
          About Us
        </a>
        <a
          className={classNames(
            "hover:text-primary transition-color duration-300",
            { "text-primary": hash === "roadmap" }
          )}
          href="#roadmap"
        >
          RoadMap
        </a>
        <a
          className={classNames(
            "hover:text-primary transition-color duration-300",
            { "text-primary": hash === "faq" }
          )}
          href="#faq"
        >
          FAQs
        </a>
        <a
          className={classNames(
            "hover:text-primary transition-color duration-300",
            { "text-primary": hash === "contact" }
          )}
          href="#contact"
        >
          Contact Us
        </a>
      </div>
      <div className="font-raleway font-extrabold">
        <Button
          variant="default"
          className="font-raleway font-extrabold bg-gradient-to-r hover:bg-gradient-to-l transition-all duration-300 from-primary to-secondary"
          onClick={() => console.log("Connect Wallet")}
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
