const renderHeader = (headerName) => (
  <span style={{ color: "white" }}>{headerName}</span>
);

const columns = () => [
  {
    field: "date",
    headerName: "Date",
    editable: true,
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
  {
    field: "status",
    headerName: "Status",
    editable: true,
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
  {
    field: "requestTime",
    headerName: "Request Time",
    editable: true,
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
  {
    field: "operationStart",
    headerName: "Operation Start",
    editable: true,
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
  {
    field: "operationEnd",
    headerName: "Operation End",
    editable: true,
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
  {
    field: "duration",
    headerName: "Duration",
    editable: true,
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
  {
    field: "employee",
    headerName: "Employee",
    editable: true,
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
];

export default columns;
