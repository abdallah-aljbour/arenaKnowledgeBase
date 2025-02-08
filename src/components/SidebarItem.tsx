import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.scss";
import addIcon from "../assets/add.svg";

interface SidebarItemProps {
  icon: string;
  text: string;
  link: string;
  isCollapsed: boolean;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  link,
  isCollapsed,
  isActive,
}) => {
  return (
    <NavLink
      to={link}
      className={`sidebar-item ${isActive ? "active" : ""} ${
        isCollapsed ? "collapsed" : ""
      }`}
    >
      <img src={`../../public/${icon}`} alt={text} className="icon" />
      {!isCollapsed && <span className="text">{text}</span>}
      {!isCollapsed && <img src={addIcon} alt="Add" className="plus-icon" />}
    </NavLink>
  );
};

export default SidebarItem;
