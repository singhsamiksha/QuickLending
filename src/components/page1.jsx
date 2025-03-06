import { Avatar, AvatarGroup, CardContent, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import StarsIcon from '@mui/icons-material/Stars';
import LanguageIcon from '@mui/icons-material/Language';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Header from "./header";
import { blue } from "@mui/material/colors";
import LinesEllipsis from 'react-lines-ellipsis'

function Page1() {
  return (
    
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "column", padding: "50px" }}>
        {/* Title Section */}
        <h1 style={{ width: "70%", textAlign: "left", marginBottom: "15px" , padding: "0px"}}>
          Learn how we are <span style={{ color: "red" }}>Different</span> from 
        </h1>
        <h1 style={{padding: "0px"}}>other lenders.</h1>
        {/* Main Content Section */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", padding: "0px" }}>
          {/* Left Section (30%) */}

          <div
            style={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "start", // Ensures everything starts from the same point
              gap: "15px",
              padding: "0px"
            }}
          >
            <hr
              style={{
                backgroundColor: "red",
                border: "none",
                borderRadius: "5px",
                width: "50px",
                padding: "2px 3px",
              }}
            />
            <p style={{ fontWeight: "300", margin: "0" , padding: "0px"}}>Get your loan quickly and efficiently.</p>
            <button
              className="outer"
              style={{
                backgroundColor: "white",
                padding: "1.5px",
                border: "solid 1px red",
                color: "black",
                fontSize: "20px",
                fontWeight: "600",
                cursor: "pointer",
                width: "130px",
                margin: "3px 2px"
              }}
            >
              <button
                className="inner"
                style={{ backgroundColor: "red", padding: "15px 20px", fontWeight: "600" }}
              >
                Apply now
              </button>
              →
            </button>

            {/* Avatar Group */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" , padding: "0px"}}>
              <AvatarGroup style={{width: "120px"}}>
                <Avatar alt="Remy Sharp" src="src/assets/dp1.jpg" style={{ width: "15px", height: "30px" }} />
                <Avatar alt="Travis Howard" src="src/assets/dp3.jpg" style={{  width: "15px", height: "30px"  }} />
                <Avatar alt="Cindy Baker" src="src/assets/dp4.jpg" style={{ width: "15px", height: "30px" }} />
              </AvatarGroup>
              <div style={{padding: "0px"}}>
                <h2 style={{ fontSize: "22px", fontWeight: "500", margin: "0" }}>320K</h2>
                <h3 style={{ fontSize: "18px", fontWeight: "400", margin: "0" }}>Active Users</h3>
              </div>
            </div>
          </div>

          {/* Center Section (Image - 40%) */}
          <div style={{ width: "40%", display: "flex", justifyContent: "center", height: "400px" }}>
            <img
              src="src/assets/istockphoto-1174414098-612x612-removebg-preview.png"
              alt="Loan Illustration"
              style={{borderRadius: "10px" }}
            />
          </div>

          <div style={{ width: "30%", display: "flex", flexDirection: "column" }}>
          {[
            { icon: BusinessIcon, text: "2M+ Business Owners", bgColor: "red" },
            { icon: LanguageIcon, text: "10+ Country's Supported", bgColor: "blue" },
            { icon: StarsIcon, text: "4.9 Ratings by Customers", bgColor: "green" }, 
          ].map((item, index) => (
            <CardContent
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "white",
                borderRadius: "5px",
                width: "210px",
                padding: "10px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                marginBottom: "20px",
              }}
            >
              <item.icon
                sx={{
                  fontSize: "15px",
                  color: "white",
                  backgroundColor: item.bgColor,
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "black",
                  backgroundColor: "white",
                  fontWeight: "600",
                  fontSize: "12px"
                }}
              >
                {item.text}
              </Typography>
            </CardContent>
          ))}
          <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "white",
                borderRadius: "5px",
                width: "220px",
                padding: "10px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                marginTop: "20px",
                marginLeft: "50px"
              }}
            >
              <CurrencyExchangeIcon
                sx={{
                  fontSize: "25px",
                  color: "white",
                  backgroundColor: blue,
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "black",
                  backgroundColor: "white",
                  fontWeight: "600",
                  fontSize: "16px"
                }}
              >
                Residencial & commercial loan
              </Typography>
            </CardContent>
        </div>

        </div>
      </div>
    </>
  );
}

export default Page1;
