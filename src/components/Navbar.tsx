import "../styles/navbar.scss";

import home from "../assets/Home.svg";
import Notification from "../assets/Notification.svg";
import Group from "../assets/Group.svg";
import oval from "../assets/Oval.svg";
import profile from "../assets/profile.svg";
import chart from "../assets/Chart graph 5.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <span className="Knowledge-Base">Knowledge Base</span>
      </div>
      <div className="right-navbar">
        <ul>
          <li>
            <img src={home} alt="home" />
            Home
          </li>
          <li>
            <img src={Notification} alt="Notification" />
            Notification
          </li>
          <li>
            <img src={Group} alt="Group" />
            English
          </li>
          <li>
            <div className="User-Names">
              <img src={oval} alt="User Names" className="circle" />
              <img src={profile} alt="User Names" className="prfile" />
            </div>
            User Names
            <img src={chart} alt="chart" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
