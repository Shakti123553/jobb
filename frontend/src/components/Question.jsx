import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

// Styled Accordion
const CustomAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  '&.Mui-expanded': {
    backgroundColor: '#e6f4ea',
  },
  '& .MuiAccordionSummary-root': {
    padding: theme.spacing(2.5, 3),
  },
  '& .MuiAccordionDetails-root': {
    padding: theme.spacing(0, 3, 2),
  },
}));

const Question = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section */}
      <div className="md:w-1/2 pl-20">
        <p className="text-md pb-7 font-semibold uppercase" style={{ color: "#72B261" }}>
          Common Questions
        </p>
        <h2 className="text-5xl font-bold text-gray-900 mt-2 mb-4 pb-5">
          Frequently Ask<br /> Question.
        </h2>
        <p className="text-gray-500 mb-10 pb-5 text-xl">
          Lorem ipsum dolor sit amet, consectetur<br />
          adipiscing elit. Ut elit tellus, luctus nec ullamcorper<br />
          mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Right Section - Controlled Accordions */}
      <div className="relative w-full md:w-[650px] lg:w-[1300px] pt-20 pr-15 max-w-[1500px]">
        <div>
          <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              <Typography component="span" className="text-xl font-bold">
                Nec sit scelerisque curae montes et?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Odio actor vulputate aliquet isculis amet. Morb felis suscipitt neque pretium consequat ultrices tellus taciti integer malesuada. Quam netus egestas laoreet phasellus vitae pede dapibus.
            </AccordionDetails>
          </CustomAccordion>

          <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography component="span" className="text-lg font-semibold">
                Vel neque duis lobortis elementum himenaeos erat?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Sagittis dolor primis tortor felis neque ipsum. Adipiscing augue pede dolor bibendum platea inceptos venenatis. Penatibus integer est nam himenaeos augue nostra ante per arcu massa.
            </AccordionDetails>
          </CustomAccordion>

          <CustomAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
              <Typography component="span" className="text-lg font-semibold">
                Luctus aliquam elementum habitasse consequat quam
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Sagittis dolor primis tortor felis neque ipsum. Adipiscing augue pede dolor bibendum platea inceptos venenatis. Penatibus integer est nam himenaeos augue nostra ante per arcu massa.
            </AccordionDetails>
          </CustomAccordion>

          <CustomAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header">
              <Typography component="span" className="text-lg font-semibold">
                Velit felis nisi non tempor eget
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Sagittis dolor primis tortor felis neque ipsum. Adipiscing augue pede dolor bibendum platea inceptos venenatis. Penatibus integer est nam himenaeos augue nostra ante per arcu massa.
            </AccordionDetails>
          </CustomAccordion>

          <CustomAccordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5-content" id="panel5-header">
              <Typography component="span" className="text-xl font-semibold">
                Sit imperdiet fringilla nulla letius vestibulum
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Sagittis dolor primis tortor felis neque ipsum. Adipiscing augue pede dolor bibendum platea inceptos venenatis. Penatibus integer est nam himenaeos augue nostra ante per arcu massa.
            </AccordionDetails>
          </CustomAccordion>
        </div>
      </div>
    </section>
  );
};

export default Question;
