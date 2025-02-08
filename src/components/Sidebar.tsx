// Sidebar.tsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import sidebarData from "../data/sidebarData.json";
import SidebarItem from "./SidebarItem";
import "../styles/sidebar.scss";
import arenaLogo from "../assets/Arena-logo-icon.svg";
import sidebarLeft from "../assets/sidebar-left.svg";
import sidebarRight from "../assets/sidebar-right.svg";
import searchIcon from "../assets/search-normal.svg";

// Define types for SidebarItem and SubMenu
interface SubMenuItem {
  text: string;
  link: string;
}

interface SidebarItemData {
  text: string;
  link: string;
  subItems?: SubMenuItem[];
}

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] =
    useState<SidebarItemData | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (selectedSubMenu) setSelectedSubMenu(null);
  };

  const handleSubMenuClose = () => {
    setSelectedSubMenu(null);
    setIsCollapsed(false);
  };

  const handleItemClick = (link: string) => {
    navigate(link);
    setSelectedSubMenu(null);
  };

  // Determine if a submenu is open
  const isSubMenuOpen = selectedSubMenu !== null;

  return (
    <>
      <div
        className={`sidebar ${isCollapsed ? "collapsed" : ""}`}
        style={{
          borderTopRightRadius: isSubMenuOpen ? "0" : "12px",
          borderBottomRightRadius: isSubMenuOpen ? "0" : "12px",
        }}
      >
        <div className="partOneAndTow">
          <div className={`partOne ${isCollapsed ? "collapsed" : ""}`}>
            <div className="logo-text-container">
              <img src={arenaLogo} alt="Arena Logo" />
              {!isCollapsed && <span className="ARENA">ARENA</span>}
            </div>
            {!isCollapsed && (
              <img
                src={sidebarLeft}
                alt="Toggle Menu"
                className="toggle-left"
                onClick={toggleSidebar}
              />
            )}
          </div>
          {isCollapsed && (
            <img
              src={sidebarRight}
              alt="Toggle Menu"
              className="right-toggle"
              onClick={toggleSidebar}
            />
          )}
          <div className={`partTow ${isCollapsed ? "collapsed" : ""}`}>
            <div className="search-container">
              <img src={searchIcon} alt="Search Icon" className="search-icon" />
              {!isCollapsed && <span className="search-text">Search</span>}
            </div>
          </div>
        </div>

        <div className={`partItem ${isCollapsed ? "collapsed" : ""}`}>
          <div className={`mainMenu ${isCollapsed ? "collapsed" : ""}`}>
            Main Menu
          </div>
          <div className={`item ${isCollapsed ? "collapsed" : ""}`}>
            {sidebarData.map((item, index) => (
              <SidebarItem
                key={index}
                {...item}
                isCollapsed={isCollapsed}
                isActive={location.pathname === item.link}
                onPlusClick={() => {
                  if (item.subItems) {
                    setSelectedSubMenu(item);
                    setIsCollapsed(true);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedSubMenu && selectedSubMenu.subItems && (
        <div className="submenu-container">
          <div className="submenu-header">
            <div className="back-button" onClick={handleSubMenuClose}>
              ←
            </div>
            <h2>{selectedSubMenu.text}</h2>
          </div>
          <div className="submenu-items">
            {selectedSubMenu.subItems.map((item, index) => (
              <div
                key={index}
                className="submenu-item"
                onClick={() => handleItemClick(item.link)}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
