import { ReactNode } from "react";
import LeftBar from "./Bars/LeftBar/leftbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: "flex" }}>
      <LeftBar />
      <div
        style={{
          marginLeft: "210px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
