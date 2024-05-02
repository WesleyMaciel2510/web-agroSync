import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";

interface Props {
  isAuthenticated: boolean;
}

const AuthenticatedRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to="/home" />} />
    <Route path="/home" element={<HomePage />} />
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
