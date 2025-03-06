import * as React from "react";
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
      question: "How quickly can I get approved for an asset-based loan?",
      answer:
        "Asset-based loans typically have a much faster approval process compared to traditional bank loans. Depending on the lender, you could be approved within 24-48 hours and receive funding within a week.",
    },
    {
      question: "Do asset-based lenders check my credit score?",
      answer:
        "While credit score may be considered, asset-based loans focus primarily on the value of the property itself rather than your personal credit history.",
    },
    {
      question: "What types of properties qualify for an asset-based loan?",
      answer:
        "Most asset-based lenders provide loans for single-family homes, multi-family units, townhouses, condominiums, and even land purchases, provided they meet loan-to-value requirements.",
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default Page5;
