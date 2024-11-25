import { Button } from "../ui/button";

function HeroSection() {
  return (
    <div className="h-dvh relative pt-72 md:pt-0 md:mt-56">
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
