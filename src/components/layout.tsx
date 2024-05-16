import React, { ReactNode } from "react";
import NavBar from "./NavBar/navbar";
import LeftBar from "./Bars/LeftBar/leftbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar />
      <div style={{ display: "flex", flex: 1 }}>
        <LeftBar />
        <div style={{ flex: 5, display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
