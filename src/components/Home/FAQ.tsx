import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import GradientCircle from "../../assets/gradient-blur.svg";

function FAQ() {
  return (
    <>
      <div className="relative">
        <img
          src={GradientCircle}
          className="opacity-10 absolute -z-10 -top-1/2 -translate-y-10 md:-translate-y-2/4 -right-20 translate-x-1/2"
        />
        <img
          src={GradientCircle}
          className="opacity-10 absolute -z-10 top-1/2 translate-y-1/4 md:-translate-y-1/4 -left-10 -translate-x-1/2"
        />
      </div>
      <div className="md:px-96 px-12">
        <div className="bg-white/5 border-white/5 border px-10 md:px-20 py-5 md:py-10 rounded-lg my-20">
          <div
            className="font-fira text-4xl font-extrabold text-primary text-center mb-8"
            id="faq"
          >
            FAQs
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-t border-white/5"
              >
                <AccordionTrigger className="text-sm md:text-base text-left">
                  How do I get a Referral Code?
                </AccordionTrigger>
                <AccordionContent className="text-[#BAB8B8]/25">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Architecto rerum nemo ipsam quaerat commodi nihil corrupti
                  voluptates voluptate officia odit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-t border-white/5"
              >
                <AccordionTrigger className="text-sm md:text-base text-left">
                  Do I get rewarded in tokens or ETH when I refer buyers?
                </AccordionTrigger>
                <AccordionContent className="text-[#BAB8B8]/25">
                  You receive your rewards in ETH instantly once someone you
                  refer makes a transaction!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-t border-white/5"
              >
                <AccordionTrigger className="text-sm md:text-base text-left">
                  How do I get a Referral Code?
                </AccordionTrigger>
                <AccordionContent className="text-[#BAB8B8]/25">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  sint beatae pariatur nam voluptatibus expedita, nisi harum
                  nostrum accusamus porro.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
