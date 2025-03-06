import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Page2() {
  const [alignment, setAlignment] = React.useState("residential");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p>How we can help</p>
        <h1>Loan Types</h1>
        <hr
          style={{
            backgroundColor: "blue",
            border: "none",
            borderRadius: "5px",
            width: "50px",
            padding: "2px 3px",
          }}
        />
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Loan Type"
        >
          <ToggleButton value="residential">Residential Loan</ToggleButton>
          <ToggleButton value="commercial">Commercial Loan</ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <div className="left" style={{ width: "60%" }}>
          <img
            src={
              alignment === "residential"
                ? "https://png.pngtree.com/png-vector/20241116/ourmid/pngtree-smiling-man-giving-thumbs-up-png-image_14421150.png"
                : "https://png.pngtree.com/png-vector/20231115/ourmid/pngtree-smiling-handsome-african-guy-person-png-image_10584208.png"
            }
            alt={alignment === "residential" ? "Residential Loan Image" : "Commercial Loan Image"}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <div className="right" style={{ width: "40%" }}>
          <h1 style={{ fontSize: "30px" }}>
            {alignment === "residential" ? "Residential Loan" : "Commercial Loan"}
          </h1>
          <p style={{ fontSize: "15px", fontWeight: "300" }}>
            Quick Lending’s short-term, interest-only loans are for investors purchasing
            single-family, townhouses, condominiums, multifamily up to 4 units, and lot/land
            under an LLC or Corporation. We do not lend to consumers (personal loans).
          </p>
          <button style={{ backgroundColor: "red", margin: "20px", fontWeight: "600" }}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page2;
