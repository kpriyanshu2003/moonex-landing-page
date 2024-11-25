import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function FAQ() {
  return (
    <div className="px-96">
      <div className="bg-white/5 border-white/5 border px-20 py-10 rounded-lg my-20">
        <div className="font-fira text-4xl font-extrabold text-primary text-center mb-8">
          FAQs
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border-b border-t border-white/5"
            >
              <AccordionTrigger>How do I get a Referral Code?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto rerum nemo ipsam quaerat commodi nihil corrupti
                voluptates voluptate officia odit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-b border-t border-white/5"
            >
              <AccordionTrigger>
                Do I get rewarded in tokens or ETH when I refer buyers?
              </AccordionTrigger>
              <AccordionContent>
                You receive your rewards in ETH instantly once someone you refer
                makes a transaction!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-b border-t border-white/5"
            >
              <AccordionTrigger>How do I get a Referral Code?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                sint beatae pariatur nam voluptatibus expedita, nisi harum
                nostrum accusamus porro.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
