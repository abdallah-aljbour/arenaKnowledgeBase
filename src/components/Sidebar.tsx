import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import sidebarData from "../data/sidebarData.json";
import SidebarItem from "./SidebarItem";
import "../styles/sidebar.scss";
import arenaLogo from "../assets/Arena-logo-icon.svg";
import sidebarLeft from "../assets/sidebar-left.svg";
import sidebarRight from "../assets/sidebar-right.svg";
import searchIcon from "../assets/search-normal.svg";

interface SubMenuItem {
  text: string;
  link: string;
}

interface SidebarItemData {
  text: string;
  link: string;
  subItems?: SubMenuItem[];
}

interface SidebarProps {
  onStateChange?: (isCollapsed: boolean, hasSubmenuOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onStateChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] =
    useState<SidebarItemData | null>(null);
  const [activeItem, setActiveItem] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    onStateChange?.(isCollapsed, selectedSubMenu !== null);
  }, [isCollapsed, selectedSubMenu, onStateChange]);

  const toggleSidebar = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    if (selectedSubMenu) setSelectedSubMenu(null);
  };

  const handleSubMenuClose = () => {
    setSelectedSubMenu(null);
    setIsCollapsed(false);
  };

  const handleItemClick = (link: string) => {
    setActiveItem(link);
    navigate(link);
    setSelectedSubMenu(null);
  };

  const handlePlusClick = (item: SidebarItemData) => {
    if (item.subItems) {
      setSelectedSubMenu(item);
      setIsCollapsed(true);
    }
  };

  const isSubMenuOpen = selectedSubMenu !== null;

  return (
    <>
      <div
        className={`sidebar ${isCollapsed ? "collapsed" : ""} ${
          isSubMenuOpen ? "submenu-open" : ""
        }`}
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
                isActive={activeItem === item.link}
                onClick={() => handleItemClick(item.link)}
                onPlusClick={() => handlePlusClick(item)}
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
