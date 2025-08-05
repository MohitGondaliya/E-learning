import { ThemeProvider } from "@mui/material";
import "./App.css";
import LearningTheme from "./App.theme";
import AppRouter from "./App.Routes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={LearningTheme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
