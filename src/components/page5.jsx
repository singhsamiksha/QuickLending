import * as React from "react";
import "./Page5.css"; // Import the CSS file
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Page5() {
  const faqData = [
    {
      question: "What is the difference between a real estate investment loan (asset-based) and traditional bank loans?",
      answer:
        "Traditional banks generally have many more guidelines and lending criteria that make it nearly impossible to get a loan from them for the purpose of buying, rehabbing, and reselling residential properties. Asset-based lenders specialize in loans against these types of distressed properties. Asset-based loans are usually short-term and have somewhat higher interest rates, BUT can close quickly and finance repairs, and closing costs when purchasing within 70% loan to value.",
    },
    {
      question: "How much can I borrow?",
      answer:
        "Asset-based loans typically have a much faster approval process compared to traditional bank loans. Depending on the lender, you could be approved within 24-48 hours and receive funding within a week.",
    },
    {
      question: "Do you loan on rental property?",
      answer:
        "While credit score may be considered, asset-based loans focus primarily on the value of the property itself rather than your personal credit history.",
    },
    {
      question: "Do you loan on commercial property?",
      answer:
        "Most asset-based lenders provide loans for single-family homes, multi-family units, townhouses, condominiums, and even land purchases, provided they meet loan-to-value requirements.",
    },
  ];

  return (
    <div className="page5-container">
      <Typography variant="h4" className="page5-title" gutterBottom>
        Frequently Asked <span style={{ color: "red" }}>Questions</span>
      </Typography>
      <hr className="page5-divider" />
      {faqData.map((faq, index) => (
        <Accordion key={index} className="page5-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} className="page5-accordion-summary">
            <Typography variant="h6" style={{ color: "black" , fontSize: "16px", fontWeight: "550"}}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails className="page5-accordion-details">
            <Typography style={{ color: "black" }}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default Page5;
