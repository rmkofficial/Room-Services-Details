const renderStatusCell = (params) => {
  let color;
  switch (params.value) {
    case "Active":
      color = "green";
      break;
    case "Inactive":
      color = "red";
      break;
    default:
      color = "black";
  }
  return <div style={{ color }}>{params.value}</div>;
};

const columns = () => [
  { field: "date", headerName: "Date", width: 120, editable: true },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    editable: true,
    renderCell: renderStatusCell,
  },
  {
    field: "requestTime",
    headerName: "Request Time",
    width: 150,
    editable: true,
  },
  {
    field: "operationStart",
    headerName: "Operation Start",
    width: 150,
    editable: true,
  },
  {
    field: "operationEnd",
    headerName: "Operation End",
    width: 150,
    editable: true,
  },
  { field: "duration", headerName: "Duration", width: 100, editable: true },
  { field: "employee", headerName: "Employee", width: 130, editable: true },
];

export default columns;
