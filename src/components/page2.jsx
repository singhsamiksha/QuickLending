import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import StarsIcon from "@mui/icons-material/Stars";
import residentialImg from "../assets/Untitled (600 x 400 px) (3).png";
import commercialImg from "../assets/Untitled (600 x 400 px) (4).png";
import "./Page2.css"; 

function Page2() {
  const [alignment, setAlignment] = React.useState("residential");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div className="page2-container">
      <p>How we can help</p>
      <h1>Loan Types</h1>
      <hr className="page2-divider" />

      <ToggleButtonGroup
        className="page2-toggle-group"
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Loan Type"
      >
        <ToggleButton value="residential">Residential Loan</ToggleButton>
        <ToggleButton value="commercial">Commercial Loan</ToggleButton>
      </ToggleButtonGroup>

      <div className="page2-content">
        <div className="page2-left">
          <img
            src={
              alignment === "residential"
                ? residentialImg
                : commercialImg
            }
            alt={alignment === "residential" ? "Residential Loan Image" : "Commercial Loan Image"}
          />
        </div>

        {/* Card Section */}
        <div className="center-section">
          {[
            { icon: BusinessIcon, text: "2M+ Business Owners", bgColor: "red" },
            { icon: LanguageIcon, text: "10+ Countries Supported", bgColor: "blue" },
            { icon: StarsIcon, text: "4.9 Ratings by Customers", bgColor: "green" },
          ].map((item, index) => (
            <CardContent 
              key={index} 
              className="card-content" 
              style={{display: "flex", zIndex: "2", width: "200px", marginLeft: "-150px", marginBottom: "3px", justifyContent: "center", alignItems: "center", gap: "5px", backgroundColor: "background-color:  rgb(241, 243, 255)"}}>
              <item.icon className="card-icon" sx={{ color: "white", backgroundColor: item.bgColor, borderRadius: "50%", padding: "10px" , fontSize: "13px"}} />
              <Typography className="card-text" style={{fontSize: "13px"}}>{item.text}</Typography>
            </CardContent>
          ))}
        </div>

        <div className="page2-right">
          <h1>{alignment === "residential" ? "Residential Loan" : "Commercial Loan"}</h1>
          <p>
            Quick Lending’s short-term, interest-only loans are for investors purchasing
            single-family, townhouses, condominiums, multifamily up to 4 units, and lot/land
            under an LLC or Corporation. We do not lend to consumers (personal loans).
          </p>
          <button className="page2-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default Page2;
