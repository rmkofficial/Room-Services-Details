import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import DetailsView from "./components/DetailsView";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },
});

const globalStyles = (
  <GlobalStyles
    styles={{
      body: { fontFamily: "Poppins, Arial, sans-serif" },
      ".MuiDataGrid-columnHeaderTitle": { fontWeight: "bold" },
    }}
  />
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <DetailsView />
    </ThemeProvider>
  );
}
