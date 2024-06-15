import { useState } from "react";
import MURDetails from "./MURDetails";
import LaundryDetails from "./LaundryDetails";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function DetailsView() {
  const [view, setView] = useState("mur");

  const getButtonStyle = (buttonType) => ({
    backgroundColor: view === buttonType ? "#49796B" : "#A8C5DA",
    color: "white",
    marginRight: "10px",
  });

  return (
    <Container maxWidth="xl">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "20px",
        }}
      >
        <Button
          variant="contained"
          style={getButtonStyle("mur")}
          onClick={() => setView("mur")}
        >
          MUR Details
        </Button>
        <Button
          variant="contained"
          style={getButtonStyle("laundry")}
          onClick={() => setView("laundry")}
        >
          Laundry Details
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: 600,
            width: "100%",
            background: "",
            border: "2px solid gray",
            borderRadius: "10px",
          }}
        >
          {view === "mur" && <MURDetails />}
          {view === "laundry" && <LaundryDetails />}
        </div>
      </div>
    </Container>
  );
}
