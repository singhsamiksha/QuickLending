import React from "react";
import "./Page3.css"; 
import { CardContent, Typography } from "@mui/material"; // Import MUI components
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; 
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

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
            backgroundColor: "rgb(255, 255, 255)"
          }}>
          <TrendingUpIcon
            className="card-icon"
            sx={{ color: "blue", backgroundColor: "#4caf50", borderRadius: "2px", padding: "10px", fontSize: "15px" }} 
          />
          <Typography className="card-text" style={{ fontSize: "13px", color: "black"  }}>Your success is our focus</Typography>
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
            backgroundColor: "rgb(255, 255, 255)"
          }}>
          <VolunteerActivismIcon
            className="card-icon"
            sx={{ color: "white", backgroundColor: "red", borderRadius: "2px", padding: "10px", fontSize: "15px" }} 
          />
          <Typography className="card-text" style={{ fontSize: "13px", color: "black" }}>Extended support for borrowers</Typography>
        </CardContent>

        <CardContent 
          className="card-content" 
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: "8",
            width: "150px",
            marginTop: "-400px",
            marginLeft: "500px",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            backgroundColor: "rgb(255, 255, 255)",
            color: "black",
            borderRadius: "10px",
            textAlign: "center"
          }}>
          <img src="https://media.licdn.com/dms/image/v2/C4D12AQFvR6webwTsKw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1533823206296?e=2147483647&v=beta&t=yIPFxMRV1X6xGI1Hjd5ui9DzkDBJmuDfhhVkyZvuPA4" style={{borderRadius: "10px", width: "150px"}}/>
          <Typography className="card-text" style={{ fontSize: "15px", color: "black", fontWeight: "600" }}>Your <span style={{color: "red"}}>success</span> is our focus</Typography>
        </CardContent>
      </div>
    </div>
  );
}

export default Page3;
