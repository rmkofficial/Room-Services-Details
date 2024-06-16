import { Button } from "@mui/material";

const renderStatusButton = (params) => {
  const { value } = params;
  let color = "";

  switch (value) {
    case "Active":
    case "Delay":
      color = "#E72636";
      break;
    case "Cleaning":
      color = "#A8C5DA";
      break;
    case "Cleaned":
      color = "#49796B";
      break;
    default:
      color = "default";
  }

  return (
    <Button style={{ backgroundColor: color, color: "white" }}>{value}</Button>
  );
};

const renderCellWithColor = (params) => (
  <span style={{ color: "#49796B" }}>{params.value}</span>
);

const renderDurationCell = (params) => {
  const { row } = params;
  const color = row.status === "Delay" ? "#C20B01" : "#49796B";
  return <span style={{ color }}>{params.value}</span>;
};

const columns = () => [
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "black" }}>{params.colDef.headerName}</span>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "black" }}>{params.colDef.headerName}</span>
    ),
    renderCell: renderStatusButton,
  },
  {
    field: "requestTime",
    headerName: "Request Time",
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "black" }}>{params.colDef.headerName}</span>
    ),
    renderCell: renderCellWithColor,
  },
  {
    field: "operationStart",
    headerName: "Operation Start",
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "black" }}>{params.colDef.headerName}</span>
    ),
    renderCell: renderCellWithColor,
  },
  {
    field: "operationEnd",
    headerName: "Operation End",
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "black" }}>{params.colDef.headerName}</span>
    ),
    renderCell: renderCellWithColor,
  },
  {
    field: "duration",
    headerName: "Duration",
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "black" }}>{params.colDef.headerName}</span>
    ),
    renderCell: renderDurationCell,
  },
  {
    field: "employee",
    headerName: "Employee",
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "black" }}>{params.colDef.headerName}</span>
    ),
  },
];

export default columns;
