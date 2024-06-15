import { DataGrid } from "@mui/x-data-grid";
import columns from "./utils/Columns";

export default function App() {
  const rows = [
    {
      id: 1,
      date: "2023-01-01",
      status: "Active",
      requestTime: "08:00",
      operationStart: "08:30",
      operationEnd: "09:00",
      duration: "30 mins",
      employee: "John Doe",
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns()}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
