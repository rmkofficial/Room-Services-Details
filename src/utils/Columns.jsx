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
  { field: "date", headerName: "Date", editable: true, flex: 1 },
  {
    field: "status",
    headerName: "Status",
    editable: true,
    renderCell: renderStatusCell,
    flex: 1,
  },
  {
    field: "requestTime",
    headerName: "Request Time",
    editable: true,
    flex: 1,
  },
  {
    field: "operationStart",
    headerName: "Operation Start",
    editable: true,
    flex: 1,
  },
  {
    field: "operationEnd",
    headerName: "Operation End",
    editable: true,
    flex: 1,
  },
  { field: "duration", headerName: "Duration", editable: true, flex: 1 },
  { field: "employee", headerName: "Employee", editable: true, flex: 1 },
];

export default columns;
