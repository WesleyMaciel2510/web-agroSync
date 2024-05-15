import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/Login";
import Home from "../pages/Home";
import Analytics from "../pages/Analytics";
import MyInvestments from "../pages/my-investments";
import MyAccounts from "../pages/my-accounts";
import NotFoundPage from "../pages/NotFound";

interface Props {
  isAuthenticated: boolean;
}

const AuthenticatedRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/analytics" element={<Analytics />} />
    <Route path="/my-investments" element={<MyInvestments />} />
    <Route path="/my-accounts" element={<MyAccounts />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

const UnauthenticatedRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

const AppRoutes: React.FC<Props> = ({ isAuthenticated }) => {
  return isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default AppRoutes;
