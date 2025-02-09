import { useState } from "react";
import "../styles/main.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import EmptyComponent from "../components/empty";
import Toolbar from "../components/toolBar";
import CardGrid from "../components/CardGrid/CardGrid";
import { CardData } from "../components/Card/types";

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
  const cardsData: CardData[] = new Array(8).fill({
    image: "/src/assets/Knowledge Base Thumbnil.svg",
    title: "Collection Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icons: [
      { image: "/src/assets/folder-2.svg", text: "12 Section" },
      { image: "/src/assets/note-text.svg", text: "50 Article" },
    ],
  });

  return (
    <div className="main-container">
      <div className="main-content">
        <Sidebar onStateChange={handleSidebarStateChange} />
        <div className="wrapper">
          <Navbar />
          <EmptyComponent />
          <Toolbar />
          <CardGrid cards={cardsData} />
        </div>
      </div>
    </div>
  );
};

export default Main;
