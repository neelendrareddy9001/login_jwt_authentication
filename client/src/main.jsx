import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { ThemeContext, themes } from "./context/themeContext.jsx";

import { BrowserRouter } from "react-router-dom";
import { NavigationContextProvider } from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavigationContextProvider>
        <App />
      </NavigationContextProvider>
    </BrowserRouter>
  </StrictMode>
);
