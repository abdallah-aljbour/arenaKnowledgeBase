import { useState } from "react";
import "../styles/main.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import EmptyComponent from "../components/empty";

import Toolbar from "../components/toolBar";

import CardGrid from "../components/CardGrid/CardGrid";
import NewCollectionModal from "../components/NewCollectionModal";
import { CardData } from "../components/Card/types";
import Footer from "../components/footer";


const Main = () => {
  const [sidebarState, setSidebarState] = useState({
    isCollapsed: false,
    hasSubmenuOpen: false,
  });

  // Add state for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler for opening modal
  const handleOpenModal = () => setIsModalOpen(true);

  // Handler for closing modal
  const handleCloseModal = () => setIsModalOpen(false);

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

          <Toolbar onAddNew={handleOpenModal} />
          <CardGrid cards={cardsData} />
          <Footer />
          <NewCollectionModal isOpen={isModalOpen} onClose={handleCloseModal} />


          <Toolbar />

        </div>
      </div>
    </div>
  );
};

export default Main;
