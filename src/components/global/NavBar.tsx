import classNames from "classnames";
import Logo from "../../assets/logo.svg";
import { Button } from "../ui/button";
import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [hash, setHash] = useState<string>("home");
  const [nav, setNav] = useState<boolean>(false); // true : open

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
    <div>
      <div className="flex items-center justify-between lg:justify-around bg-transparent absolute top-5 w-full z-10 px-5 lg:px-0">
        <div>
          <img src={Logo} />
        </div>

        <div className="hidden lg:flex items-center gap-20 font-raleway font-extrabold">
          <a
            className={classNames(
              "hover:text-primary transition-color duration-300",
              { "text-primary": hash === "home" || hash == "" }
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

        <div className="hidden lg:block font-raleway font-extrabold">
          <Button
            variant="default"
            className="font-raleway font-extrabold bg-gradient-to-r hover:bg-gradient-to-l transition-all duration-300 from-primary to-secondary"
            onClick={() => console.log("Connect Wallet")}
          >
            Connect Wallet
          </Button>
        </div>

        <Menu className="lg:hidden" onClick={() => setNav(true)} />
      </div>

      {/* Mobile Navigation */}
      <div
        className={classNames(
          "lg:hidden absolute h-dvh w-dvw bg-black/75 z-20 top-0 left-0 p-10 transition-all duration-300",
          { "-translate-y-full": !nav }
        )}
      >
        <X className="absolute top-10 right-10" onClick={() => setNav(false)} />

        <div className="flex flex-col items-center gap-10 font-raleway font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <a
            className={classNames(
              "hover:text-primary transition-color duration-300",
              { "text-primary": hash === "home" || hash === "" }
            )}
            href="#home"
            onClick={() => setNav(false)}
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
          <Button
            variant="default"
            className="font-raleway font-extrabold bg-gradient-to-r hover:bg-gradient-to-l transition-all duration-300 from-primary to-secondary"
            onClick={() => console.log("Connect Wallet")}
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
