import React from "react";
import "../styles/sidebar.scss";
import addIcon from "../assets/add.svg";

interface SidebarItemProps {
  icon: string;
  text: string;
  link: string;
  isCollapsed: boolean;
  isActive: boolean;
  subItems?: Array<{ text: string; link: string }>;
  onClick: () => void;
  onPlusClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,

  isCollapsed,
  isActive,
  subItems,
  onClick,
  onPlusClick,
}) => {
  return (
    <div
      className={`sidebar-item ${isActive ? "active" : ""} ${
        isCollapsed ? "collapsed" : ""
      }`}
      onClick={onClick}
    >
      <img src={`../../public/${icon}`} alt={text} className="icon" />
      {!isCollapsed && <span className="text">{text}</span>}
      {!isCollapsed && subItems && (
        <img
          src={addIcon}
          alt="Add"
          className="plus-icon"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onPlusClick?.();
          }}
        />
      )}
    </div>
  );
};

export default SidebarItem;
