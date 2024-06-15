const renderHeader = (headerName) => (
  <span style={{ color: "white" }}>{headerName}</span>
);

const columns = () => [
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
  {
    field: "requestTime",
    headerName: "Request Time",
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
  {
    field: "operationStart",
    headerName: "Operation Start",
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
  {
    field: "operationEnd",
    headerName: "Operation End",
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
  {
    field: "duration",
    headerName: "Duration",
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
  {
    field: "employee",
    headerName: "Employee",
    flex: 1,
    renderHeader: (params) => renderHeader(params.colDef.headerName),
  },
];

export default columns;
