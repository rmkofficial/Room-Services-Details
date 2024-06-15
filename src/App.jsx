import { useState } from "react";
import MURDetails from "./components/MURDetails";
import LaundryDetails from "./components/LaundryDetails";
import Button from "@mui/material/Button";

export default function App() {
  const [view, setView] = useState("none");

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
          onClick={() => setView("mur")}
        >
          MUR Details
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setView("laundry")}
        >
          Laundry Details
        </Button>
      </div>

      {view === "mur" && <MURDetails />}
      {view === "laundry" && <LaundryDetails />}
    </div>
  );
}
