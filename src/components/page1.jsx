import React from "react";
import { Avatar, AvatarGroup, CardContent, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import StarsIcon from "@mui/icons-material/Stars";
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { blue } from "@mui/material/colors";
import "./page1.css"; // Import the new CSS file

function Page1() {
  return (
    <div className="page1">
      <div>
        <h1>
          Learn how we are <span>Different</span> from
        </h1>
        <h1>other lenders.</h1>

        <div className="section" style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Section */}
          <div className="left-section">
            <hr />
            <p>Get your loan quickly and efficiently.</p>
            <button className="outer">
              <button className="inner">Apply now</button> →
            </button>

            {/* Avatar Group */}
            <div className="avatar-group">
              <AvatarGroup>
              <Avatar alt="Remy Sharp" src="src/assets/dp1.jpg" style={{ width: "40px", height: "40px" }} />
              <Avatar alt="Travis Howard" src="src/assets/dp3.jpg" style={{ width: "40px", height: "40px" }} />
              <Avatar alt="Cindy Baker" src="src/assets/dp4.jpg" style={{ width: "40px", height: "40px" }} />
              <Avatar alt="Cindy Baker" src="src\assets\Untitled design (20).png" style={{ width: "40px", height: "40px" }} />
              </AvatarGroup>
              <div>
                <h2 className="stats">320K</h2>
                <h3 className="stats-sub">Active Users</h3>
              </div>
            </div>
          </div>

          {/* Center Section */}
          <div className="center-section">
            <img
              src="src\assets\Untitled (600 x 400 px) (2).png"
              alt="Loan Illustration"
            />
          </div>

          {/* Right Section */}
          <div className="right-section">
            {[
              { icon: BusinessIcon, text: "2M+ Business Owners", bgColor: "red" },
              { icon: LanguageIcon, text: "10+ Country's Supported", bgColor: "blue" },
              { icon: StarsIcon, text: "4.9 Ratings by Customers", bgColor: "green" },
            ].map((item, index) => (
              <CardContent key={index} className="card-content">
                <item.icon className="card-icon" sx={{ backgroundColor: item.bgColor }} />
                <Typography className="card-text">{item.text}</Typography>
              </CardContent>
            ))}
            <CardContent className="loan-card">
              <CurrencyExchangeIcon className="loan-card-icon" sx={{ backgroundColor: blue }} />
              <Typography className="loan-card-text">
                Residential & commercial loan
              </Typography>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
