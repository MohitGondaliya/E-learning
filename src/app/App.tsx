import { ThemeProvider } from "@mui/material";
import "./App.css";
import LerningTheme from "./App.theme";
import AppRouter from "./App.routes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={LerningTheme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
