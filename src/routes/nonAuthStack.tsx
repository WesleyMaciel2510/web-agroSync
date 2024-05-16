import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import NotFoundPage from "../pages/NotFound";

export const UnauthenticatedRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
