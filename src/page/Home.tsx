import HeroSection from "../components/Home/HeroSection";
import AboutUs from "../components/Home/AboutUs";
import BG from "../assets/hero-bg.svg";

function Home() {
  return (
    <div className=" overflow-hidden relative">
      <img src={BG} alt="" className="absolute left-5 -z-10" />
      <div className="pt-56 z-10">
        <HeroSection />
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;