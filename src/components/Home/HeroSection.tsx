import { Button } from "../ui/button";
import GradientCircle from "../../assets/gradient-blur.svg";

function HeroSection() {
  return (
    <div className="h-dvh relative pt-72 md:pt-0 md:mt-56">
      <img
        src={GradientCircle}
        className="opacity-15 absolute -z-10 -top-1/2 translate-y-10 -left-72 hidden md:block"
      />
      <img
        src={GradientCircle}
        className="opacity-15 absolute -z-10 bottom-0 md:-translate-x-80 -right-1/2"
      />
      <div className="w-7/12 absolute md:top-48 left-10 md:left-32">
        <div className="font-fira">
          <span className="font-extrabold text-3xl md:text-7xl">
            Trusted Multi-Chain <span className="text-primary">DEX</span>{" "}
            Platform
          </span>
          <br />
          <span className="text-[#9E9E9E] md:text-2xl">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </span>
        </div>

        <div className="font-raleway font-extrabold mt-5 flex gap-5">
          <Button
            variant="default"
            className="bg-gradient-to-r hover:bg-gradient-to-l transition-all duration-300 from-primary to-secondary"
            onClick={() => console.log("Connect Wallet")}
          >
            Connect Wallet
          </Button>
          <Button variant="outline" onClick={() => console.log("Trade Crypto")}>
            Trade Crypto
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
