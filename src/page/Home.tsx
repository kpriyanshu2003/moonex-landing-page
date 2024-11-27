import HeroSection from "../components/Home/HeroSection";
import AboutUs from "../components/Home/AboutUs";
import BG from "../assets/hero-bg.svg";
import FAQ from "../components/Home/FAQ";
import GradientCircle from "../assets/gradient-blur.svg";
import RoadMap from "../components/Home/RoadMap";

function Home() {
  return (
    <div className=" overflow-hidden">
      <div className="relative">
        <img src={BG} className="absolute -z-10 w-full hidden lg:block" />
        <img
          src={GradientCircle}
          className="opacity-10 absolute -z-10 lg:-top-96 -translate-y-10 -left-72"
        />
      </div>

      <div className="z-10">
        <HeroSection />
        <AboutUs />
        <RoadMap />
        <FAQ />
      </div>
    </div>
  );
}

export default Home;
