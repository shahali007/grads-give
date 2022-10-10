import React from "react";
import FAQLogo from "./faqLogo.png";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const CompanyFAQ = () => {
    const faqList = [
        {
            question: "Make a difference in the life of a child",
            answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumeirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        },
        {
            question: "Let's do the right thing now",
            answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumeirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        },
        {
            question: "Can I donate anonymously?",
            answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumeirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        },
        {
            question: "Join your hand with us for a better life",
            answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumeirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        },
        {
            question: "How do I cancel my recurring donation?",
            answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumeirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        },
    ];
    return (
        <div>
            <div className="bg-lightBlueSectionBackground pt-8" id="faq">
                <div className="container mx-auto">
                    <div className="px-4 min-h-183 bg-lightBlueSectionBackground py-4 lg:py-20">
                        <p className="text-3.5xl lg:text-5xl font-bold leading-16">Frequently Asked Questions</p>
                        <div className="grid grid-cols-1 sm:grid-cols-5 mt-12 gap-4">
                            <div className="sm:col-span-2">
                                <img src={FAQLogo} className="w-full" alt="FAQ"/>
                            </div>
                            <div className="sm:col-span-3">
                                <Accordion preExpanded={[0]}>
                                    {faqList.map((faq, index) => (
                                        <AccordionItem uuid={index}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span className="text-2xl font-bold block ml-3">{faq.question}</span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p className="leading-8 pl-6">{faq.answer}</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyFAQ;
