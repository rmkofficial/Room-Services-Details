import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import columns from "../utils/Columns";

export default function LaundryDetails() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("../../data/laundryData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRows(data);
      })
      .catch((error) => console.error("Fetching data failed:", error));
  }, []);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns()}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        disableSelectionOnClick
        sx={{
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "rgba(71,70,71,255)",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "white",
          },
          "& .MuiDataGrid-cell": {
            color: "white",
            backgroundColor: "rgba(71,70,71,255)",
          },
          "& .MuiTablePagination-root": {
            color: "white",
          },
          "& .MuiDataGrid-iconButtonContainer": {
            color: "white",
          },
          "& .MuiDataGrid-menuIconButton": {
            color: "white",
          },
          "& .MuiDataGrid-sortIcon": {
            color: "white",
          },
        }}
      />
    </div>
  );
}
