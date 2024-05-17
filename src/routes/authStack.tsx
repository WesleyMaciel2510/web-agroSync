import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Feature from "../pages/Feature";
import Analytics from "../pages/Analytics";
import MyInvestments from "../pages/my-investments";
import MyAccounts from "../pages/my-accounts";
import NotFoundPage from "../pages/NotFound";

export const AuthenticatedRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/feature" element={<Feature />} />
    <Route path="/analytics" element={<Analytics />} />
    <Route path="/my-investments" element={<MyInvestments />} />
    <Route path="/my-accounts" element={<MyAccounts />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
