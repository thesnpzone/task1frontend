import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Heading_Subheading from "../Heading_Subheading/Heading_Subheading";
const Accordin = (props) => {
  return (
    <>
      <div class="container mb-5">
        <div class="row">
          <div className="col-lg-12">
            <Heading_Subheading
              heaading="Frequently Asked Questions"
              sub_heaading="Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand."
            />
          </div>

          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>{props.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{props.content}</AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>{props.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{props.content}</AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>{props.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{props.content}</AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>{props.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{props.content}</AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
};

export default Accordin;
