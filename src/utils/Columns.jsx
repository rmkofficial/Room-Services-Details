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

const columns = () => [
  {
    field: "date",
    headerName: "Date",
    editable: true,
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "white" }}>{params.colDef.headerName}</span>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    editable: true,
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "white" }}>{params.colDef.headerName}</span>
    ),
    renderCell: renderStatusButton,
  },
  {
    field: "requestTime",
    headerName: "Request Time",
    editable: true,
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "white" }}>{params.colDef.headerName}</span>
    ),
  },
  {
    field: "operationStart",
    headerName: "Operation Start",
    editable: true,
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "white" }}>{params.colDef.headerName}</span>
    ),
  },
  {
    field: "operationEnd",
    headerName: "Operation End",
    editable: true,
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "white" }}>{params.colDef.headerName}</span>
    ),
  },
  {
    field: "duration",
    headerName: "Duration",
    editable: true,
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "white" }}>{params.colDef.headerName}</span>
    ),
  },
  {
    field: "employee",
    headerName: "Employee",
    editable: true,
    flex: 1,
    renderHeader: (params) => (
      <span style={{ color: "white" }}>{params.colDef.headerName}</span>
    ),
  },
];

export default columns;
