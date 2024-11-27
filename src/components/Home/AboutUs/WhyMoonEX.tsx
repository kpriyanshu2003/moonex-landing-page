import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import MoonEX from "../../../assets/moon-text.svg";
import UniSwap from "../../../assets/uniswap.svg";
import GradientCircle from "../../../assets/gradient-blur.svg";

function WhyMoonEX() {
  return (
    <div className="relative">
      <img
        src={GradientCircle}
        className="opacity-10 absolute -z-10 top-1/2 lg:-top-1/2 -translate-y-1/2 lg:translate-y-32"
      />
      <div className="font-fira text-2xl lg:text-4xl font-extrabold" id="about">
        Why <span className="text-primary">MoonEX</span> ?
      </div>
      <Table className="rounded-lg overflow-hidden bg-white/5 my-5">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white font-conthrax text-primary lg:text-xl text-center py-4">
              Comparison
            </TableHead>
            <TableHead className="text-white font-conthrax text-primary text-xl text-center py-4">
              <div className="flex items-center justify-center">
                <img src={MoonEX} alt="MoonEX" />
              </div>
            </TableHead>
            <TableHead className="text-white font-conthrax text-primary text-xl text-center py-4">
              <div className="flex items-center justify-center">
                <img src={UniSwap} alt="UniSwap" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[
            { point: "1 . Point no one", moonEX: true, uniswap: false },
            { point: "2 . Point no two this", moonEX: true, uniswap: false },
            { point: "3 . Point no three", moonEX: true, uniswap: false },
            { point: "4 . Point no four", moonEX: true, uniswap: false },
            { point: "5 . Point no five", moonEX: true, uniswap: false },
          ].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-fira pl-5 lg:pl-10 text-[#F0F0F0]/70 border-t border-b border-[#D9D9D9]/10 h-20">
                {item.point}
              </TableCell>
              <TableCell className="border-t border-b border-l border-r border-[#D9D9D9]/10 h-20">
                <div className="flex items-center justify-center">
                  {item.moonEX ? (
                    <Check className="text-[#B2FFAC]" />
                  ) : (
                    <X className="text-[#FF5050]" />
                  )}
                </div>
              </TableCell>
              <TableCell className="border-t border-b border-[#D9D9D9]/10  h-20">
                <div className="flex items-center justify-center">
                  {item.uniswap ? (
                    <Check className="text-[#B2FFAC]" />
                  ) : (
                    <X className="text-[#FF5050]" />
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default WhyMoonEX;
