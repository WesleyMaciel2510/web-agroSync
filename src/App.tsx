import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="*" element={<NoPage />} /> Uncomment this for handling 404 pages */}
      </Routes>
    </BrowserRouter>
  );
}
