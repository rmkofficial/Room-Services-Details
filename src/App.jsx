import { useState } from "react";
import MURDetails from "./components/MURDetails";
import LaundryDetails from "./components/LaundryDetails";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function App() {
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
            height: 500,
            width: "100%",
            background: "rgba(71,70,71,255)",
            border: "5px solid rgba(71,70,71,255)",
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
