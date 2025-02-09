import React from "react";
import element from "../assets/element-3.svg";
import row from "../assets/row-vertical.svg";
import search from "../assets/search-normal-1.svg";
import filter from "../assets/filter.svg";
import add from "../assets/add.svg";
import "../styles/toolbar.scss";

const Toolbar: React.FC = () => {
  return (
    <div className="toolBar">
      <div className="toolBar-left">
        <div className="card-view">
          <img src={element} alt="card view" />
          <span>Card View</span>
        </div>
        <div className="row-view">
          <img src={row} alt="row view" />
          <span>List View</span>
        </div>
        <div className="search">
          <img src={search} alt="search" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <div className="toolBar-right">
        <div className="filter-add">
          <img src={filter} alt="filter" />
          <span>Filter</span>
        </div>
        <div className="addNew">
          <img src={add} alt="add" />
          <button>Add New</button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
