// App.tsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const App: React.FC = () => {
  const isAuthenticated = true; // This should be dynamically determined

  return (
    <BrowserRouter>
      <AppRoutes isAuthenticated={isAuthenticated} />
    </BrowserRouter>
  );
};

export default App;
