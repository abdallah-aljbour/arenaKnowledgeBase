import React from "react";
import arrowLeft from "../assets/2 Arrow - Left.svg";
import arrowRight from "../assets/Arrow - Right 3.svg";
import arrowRight1 from "../assets/Arrow - Right 2.svg";
import arrowRight2 from "../assets/2 Arrow - Right.svg";
import "../styles/footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footerText">
        <span>Showing on page 1 - 1 to 10</span>
      </div>
      <div className="footerIcons">
        <span>
          <img src={arrowLeft} alt="img" />
        </span>
        <span>
          <img src={arrowRight} alt="img" />
        </span>
        <span className="one">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>
          <img src={arrowRight1} alt="img" />
        </span>
        <span>
          <img src={arrowRight2} alt="img" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
