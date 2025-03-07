import React from "react";
import "./Page3.css"; 
import { CardContent, Typography } from "@mui/material"; // Import MUI components
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; 

function Page3() {
  return (
    <div className="page3-container">
      <div className="page3-left">
        <p>Quick Lending</p>
        <h1>
          Who <span>We</span> Are
        </h1>
        <hr className="page3-divider" />
        <p>
          As a client-focused, boutique private lender, we’re flexible enough to cater to most needs and nimble enough to execute quickly. We pride ourselves on the ability to make a fast decision and execute seamlessly.
        </p>
        <ul>
          <li>
          <CheckCircleIcon 
            className="card-icon"
            sx={{ color: "white", backgroundColor: "#4caf50", borderRadius: "50%", padding: "10px", fontSize: "13px" }} 
          />
            Extended support for borrowers
          </li>
          <li>
          <CheckCircleIcon 
            className="card-icon"
            sx={{ color: "white", backgroundColor: "#4caf50", borderRadius: "50%", padding: "10px", fontSize: "13px" }} 
          />
            Your success is our focus
          </li>
          <li>
          <CheckCircleIcon 
            className="card-icon"
            sx={{ color: "white", backgroundColor: "#4caf50", borderRadius: "50%", padding: "10px", fontSize: "13px" }} 
          />
            We fund, fix, and flip all transactional deals
          </li>
        </ul>
      </div>
      <div className="page3-right">
        <img
          src="src/assets/Untitled (600 x 400 px) (5).png"
          alt="Businessman"
          style={{ zIndex: "3" }}
        />
        
        <CardContent 
          className="card-content" 
          style={{
            display: "flex",
            zIndex: "4",
            width: "200px",
            marginLeft: "100px",
            marginTop: "-300px",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            backgroundColor: "rgb(216, 219, 34)"
          }}>
          <CheckCircleIcon 
            className="card-icon"
            sx={{ color: "white", backgroundColor: "#4caf50", borderRadius: "50%", padding: "10px", fontSize: "13px" }} 
          />
          <Typography className="card-text" style={{ fontSize: "13px" }}>Your success is our focus</Typography>
        </CardContent>

        <CardContent 
          className="card-content" 
          style={{
            display: "flex",
            zIndex: "5",
            width: "200px",
            marginLeft: "0px",
            marginTop: "150px",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            backgroundColor: "rgb(88, 98, 158)"
          }}>
          <CheckCircleIcon 
            className="card-icon"
            sx={{ color: "white", backgroundColor: "#4caf50", borderRadius: "50%", padding: "10px", fontSize: "13px" }} 
          />
          <Typography className="card-text" style={{ fontSize: "13px" }}>Extended support for borrowers</Typography>
        </CardContent>

        <CardContent 
          className="card-content" 
          style={{
            display: "flex",
            zIndex: "8",
            width: "200px",
            marginTop: "-400px",
            marginLeft: "500px",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            backgroundColor: "rgb(240, 189, 113)"
          }}>
          <CheckCircleIcon 
            className="card-icon"
            sx={{ color: "white", backgroundColor: "#4caf50", borderRadius: "50%", padding: "10px", fontSize: "13px" }} 
          />
          <Typography className="card-text" style={{ fontSize: "13px" }}>We fund, fix, and flip all transactional deals</Typography>
        </CardContent>
      </div>
    </div>
  );
}

export default Page3;
