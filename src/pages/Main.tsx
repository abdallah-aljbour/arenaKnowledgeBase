import { useState } from "react";
import "../styles/main.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import EmptyComponent from "../components/empty";
import Toolbar from "../components/toolBar";

const Main = () => {
  const [sidebarState, setSidebarState] = useState({
    isCollapsed: false,
    hasSubmenuOpen: false,
  });

  // Add this handler to receive sidebar state updates
  const handleSidebarStateChange = (
    collapsed: boolean,
    submenuOpen: boolean
  ) => {
    setSidebarState({
      isCollapsed: collapsed,
      hasSubmenuOpen: submenuOpen,
    });
  };

  return (
    <div className="main-container">
      <div className="main-content">
        <Sidebar onStateChange={handleSidebarStateChange} />
        <div className="wrapper">
          <Navbar />
          <EmptyComponent />
          <Toolbar />
        </div>
      </div>
    </div>
  );
};

export default Main;
