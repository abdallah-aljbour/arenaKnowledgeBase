import React from "react";
import "../styles/NewCollectionModal.scss";
import placeholderIcon from "../assets/Frame 1000002840.svg";
import closeIcon from "../assets/close-circle.svg";
import infoCercile from "../assets/info-circle.svg";
import text from "../assets/text.svg";
import info from "../assets/info-circle2.svg";
import category from "../assets/category-2.svg";
import sitting from "../assets/setting-4.svg";
import arrow from "../assets/arrow-down.svg";
import document from "../assets/document-upload.svg";
import add from "../assets/add.svg";

interface NewCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewCollectionModal: React.FC<NewCollectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div className="header-content">
            <img src={placeholderIcon} alt="New Collection" />
            <div className="title-container">
              <h2>
                Add <span className="newCollection">New Collection</span>
              </h2>
              <p>Knowledge Base / Create New Collection</p>
            </div>
          </div>
          <button className="close-button" onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>

        <div className="collectionName">
          <span className="margin">
            Collection Name<span className="star">*</span>
            <span className="infoCercile">
              <img src={infoCercile} alt="info" />
            </span>
          </span>
          <div className="inputArena">
            <div className="input-with-icons">
              <img src={text} alt="icon" className="input-icon-left" />
              <input type="text" placeholder="Arena" className="arena-input" />
              <img src={info} alt="icon" className="input-icon-right" />
            </div>
          </div>
        </div>
        <div className="Description">
          <span className="margin">
            Description
            <span className="infoCercile">
              <img src={infoCercile} alt="info" />
            </span>
          </span>
          <div className="DescriptionInput">
            <textarea
              className="DescriptionForm"
              placeholder="Description"
            ></textarea>
          </div>
        </div>

        <div className="mainTow">
          <span className="margin2">
            Tag<span className="star">*</span>{" "}
            <span className="infoCercile">
              <img src={infoCercile} alt="text" />
            </span>
          </span>
          <span className="acces2">
            Access Level<span className="star">*</span>{" "}
            <span className="infoCercile">
              <img src={infoCercile} alt="text" />
            </span>
          </span>
          <div className="towInput">
            <div className="input-container">
              <img src={category} alt="category" className="input-icon" />
              <input
                type="text"
                className="inputTow"
                placeholder="placeholder"
              />
            </div>
            <div className="input-container">
              <img src={sitting} alt="category" className="input-icon" />
              <input
                type="text"
                className="inputTow"
                placeholder="placeholder"
              />
              <img src={arrow} alt="arrow" className="input-icon-right" />
            </div>
          </div>
          <div className="upload">
            <div className="upload2">
              <div className="upload3">
                <img src={document} alt="document" />
                <p className="text1">
                  <span className="click-here ">Click here</span> to upload your
                  Collection Thumbnail or drag and drop.
                </p>
                <p className="text2">
                  Supported Format: SVG, JPG, PNG (10mb each)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lastBorder">
          <button>
            <img src={add} alt="add" />
            Create Now
          </button>
          <p className="cancel">Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default NewCollectionModal;
