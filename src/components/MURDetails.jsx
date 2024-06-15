import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import columns from "../utils/Columns";

export default function MURDetails() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("../../data/murData.json")
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
            backgroundColor: "",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "black",
          },
          "& .MuiDataGrid-cell": {
            color: "black",
            backgroundColor: "",
          },
          "& .MuiTablePagination-root": {
            color: "black",
          },
          "& .MuiDataGrid-iconButtonContainer": {
            color: "black",
          },
          "& .MuiDataGrid-menuIconButton": {
            color: "black",
          },
          "& .MuiDataGrid-sortIcon": {
            color: "black",
          },
        }}
      />
    </div>
  );
}
