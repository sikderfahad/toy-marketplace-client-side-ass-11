import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="w-10/12 mx-auto my-24 flex flex-col gap-8">
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-4xl mb-3">Frequently Asked Questions</h1>
        <Link className="text-[#4acdd5] text-lg">
          Find your answer from here
        </Link>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/1152/4590/files/toys_party.png?v=1676127944"
            alt=""
          />
        </div>
        <div>
          <div>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className="py-3"
            >
              <AccordionSummary
                expandIcon={<AiOutlineArrowDown />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  What is the age range of toys available in the store?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className="py-3"
            >
              <AccordionSummary
                expandIcon={<AiOutlineArrowDown />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  Do you offer a warranty or return policy for your products?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className="py-3"
            >
              <AccordionSummary
                expandIcon={<AiOutlineArrowDown />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  Can I order toys online or do I need to visit the store?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              className="py-3"
            >
              <AccordionSummary
                expandIcon={<AiOutlineArrowDown />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  Do I need to pick them up in-store or delivered at home?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              className="py-3"
            >
              <AccordionSummary
                expandIcon={<AiOutlineArrowDown />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  Are your toys environmentally friendly and sustainable?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
              className="py-3"
            >
              <AccordionSummary
                expandIcon={<AiOutlineArrowDown />}
                aria-controls="panel6bh-content"
                id="panel6bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  What age range of toys do you have in your store?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          {/* /////////////////////////////////////////// */}

          {/* <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<AiOutlineArrowDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                What is the age range of toys available in the store?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AiOutlineArrowDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                Do you offer a warranty or return policy for your products?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AiOutlineArrowDown />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>
                Can I order toys online or do I need to visit the store?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AiOutlineArrowDown />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>
                Do I need to pick them up in-store or delivered at home?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AiOutlineArrowDown />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography>
                Are your toys environmentally friendly and sustainable?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AiOutlineArrowDown />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography>
                What age range of toys do you have in your store?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

//
//
