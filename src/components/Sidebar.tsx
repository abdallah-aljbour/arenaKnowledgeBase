import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import sidebarData from "../data/sidebarData.json";
import SidebarItem from "./SidebarItem";
import "../styles/sidebar.scss";
import arenaLogo from "../assets/Arena-logo-icon.svg";
import sidebarLeft from "../assets/sidebar-left.svg";
import sidebarRight from "../assets/sidebar-right.svg";
import searchIcon from "../assets/search-normal.svg";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
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

      {/* Sidebar Items */}
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
