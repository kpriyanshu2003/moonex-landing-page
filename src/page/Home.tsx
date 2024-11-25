import HeroSection from "../components/Home/HeroSection";
import AboutUs from "../components/Home/AboutUs";
import BG from "../assets/hero-bg.svg";
import FAQ from "../components/Home/FAQ";

function Home() {
  return (
    <div className=" overflow-hidden relative">
      <img src={BG} alt="" className="absolute left-5 -z-10 md:w-screen" />
      <div className="z-10">
        <HeroSection />
        <AboutUs />
        <FAQ />
      </div>
    </div>
  );
}

export default Home;
