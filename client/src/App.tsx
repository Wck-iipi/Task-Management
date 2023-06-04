import React from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/AppRoutes" 
import AppProvider from "./providers/app"

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
};

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
