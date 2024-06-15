import { useState } from "react";
import MURDetails from "./components/MURDetails";
import LaundryDetails from "./components/LaundryDetails";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function App() {
  const [view, setView] = useState("mur");

  const getButtonStyle = (buttonType) => ({
    backgroundColor: view === buttonType ? "green" : "blue",
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ height: 500, width: "100%" }}>
          {view === "mur" && <MURDetails />}
          {view === "laundry" && <LaundryDetails />}
        </div>
      </div>
    </Container>
  );
}
