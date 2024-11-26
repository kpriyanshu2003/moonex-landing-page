import classNames from "classnames";
import { CheckCheck, Lock } from "lucide-react";
import GradientCircle from "../../assets/gradient-blur.svg";

function RoadMap() {
  return (
    <div className="my-20 bg-[#050E17] pt-32 container relative">
      <img
        src={GradientCircle}
        className="opacity-10 absolute -z-10 top-1/2 -translate-y-3/4 -left-1/2 translate-x-1/4"
      />
      <div
        className="font-fira font-extrabold text-4xl text-right px-10"
        id="roadmap"
      >
        <img
          src={GradientCircle}
          className="opacity-10 absolute -z-10 -right-0 -top-1/4 translate-y-10 translate-x-1/4"
        />
        Project <span className="text-primary">Roadmap</span>
      </div>

      <div className="md:px-56 md:pb-32 pt-20 px-10">
        <div className="text-center md:text-right py-10">
          <span className="text-[#B2FFAC] font-fira text-3xl font-extrabold ">
            Phase One
          </span>
          <br />
          <span className="md:hidden text-lg">
            Point number one is completed and seven words
          </span>
        </div>
        <div className="flex items-center relative md:h-56 h-40">
          <div className="border-t-2 border-dashed border-white/20 w-10/12 relative">
            <div className="absolute flex justify-between w-full -translate-y-1/2 h-56 items-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  className="text-center w-10 bg-[#050E17] rounded-full p-1"
                  key={i}
                >
                  <CheckCheck className="rounded-full bg-white/10 p-1.5 w-8 h-8" />
                  <span
                    className={classNames(
                      "text-white/50 my-2 w-40 absolute -translate-x-1/2 hidden md:block",
                      { "-translate-y-32": i % 2 === 0 }
                    )}
                  >
                    Point number one is completed and seven words
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t-2 border-white/20 w-2/12"></div>
          <div className="absolute -bottom-1/2 -translate-y-1/6 md:-translate-y-1/2">
            <span className="text-[#EDD955] font-fira text-3xl font-extrabold">
              Phase Two
            </span>
            <br />
            <span className="md:hidden text-lg">
              Point number one is completed and seven words
            </span>
          </div>
          <div className="absolute right-0 translate-y-1/2 border-r-2 border-white/20 h-56 md:h-96 grid place-items-center">
            <div className="translate-x-1/2 bg-[#050E17] p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 30 30"
                className="rounded-full bg-white/10 p-1.5 w-8 h-8"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m16.258 2.503-12.5 15h11.25l-1.25 10 12.5-15h-11.25z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center relative h-56 mt-8 md:mt-40">
          <div className="border-t-2 border-white/20 w-1/12"></div>
          <div className="absolute -bottom-1/2 -translate-y-16 md:-translate-y-1/2 w-64 md:w-auto right-0">
            <span className="text-[#ED5555] font-fira text-3xl font-extrabold ">
              Phase Three
            </span>
            <br />
            <span className="md:hidden text-lg">
              Point number one is completed and seven words
            </span>
          </div>
          <div className="border-t-2 border-dashed border-white/20 w-10/12 relative">
            <div className="absolute flex justify-between w-full -translate-y-1/2 h-56 items-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  className="text-center w-10 bg-[#050E17] rounded-full p-1"
                  key={i}
                >
                  <CheckCheck className="rounded-full bg-white/10 p-1.5 w-8 h-8" />
                  <span
                    className={classNames(
                      "text-white/50 my-2 w-40 absolute -translate-x-1/2 hidden md:block",
                      { "-translate-y-32": i % 2 === 0 }
                    )}
                  >
                    Point number one is completed and seven words
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t-2 border-white/20 w-2/12"></div>
          <div className="absolute left-0 translate-y-1/2 border-l-2 border-white/20 h-56 md:h-96 grid place-items-center">
            <div className="-translate-x-1/2 bg-[#050E17] py-4 md:py-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="rounded-full bg-white/10 p-1.5 w-8 h-8"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12.002h4M15 8.002h2a4 4 0 0 1 2.646 7M9 16.002H7a4 4 0 0 1 0-8h1M4 4.002l16 16"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center relative h-56 md:mt-40">
          <div className="border-t-2 border-white/20 w-1/12"></div>
          <div className="border-t-2 border-dashed border-white/20 w-10/12 relative">
            <div className="absolute flex justify-between w-full -translate-y-1/2 h-56 items-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  className="text-center w-10 bg-[#050E17] rounded-full p-1"
                  key={i}
                >
                  <div className="bg-white/10 rounded-full grid place-items-center w-8 h-8">
                    <Lock className="scale-75" />
                  </div>
                  <span
                    className={classNames(
                      "text-white/50 my-2 w-40 absolute -translate-x-1/2 hidden md:block",
                      { "-translate-y-32": i % 2 === 0 }
                    )}
                  >
                    Point number one is completed and seven words
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
