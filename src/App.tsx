import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { TasksProvider } from "./contexts/TasksContext";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <TasksProvider>
                    <Router />
                </TasksProvider>
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
