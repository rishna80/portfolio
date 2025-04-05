import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone, MdCake } from "react-icons/md";
import "./ProfileCard.css";
import personImage from "../assets/person-sample.png";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <img src={personImage} alt="Person Sample" className="profile-image" />;
      </div>
      <h2>Ajmal Sha</h2>
      <button className="role-button">Project Lead</button>

      {/* Social Icons */}
      <div className="social-icons">
        <FaFacebookF className="icon facebook" />
        <FaWhatsapp className="icon whatsapp" />
        <FaInstagram className="icon instagram" />
        <FaLinkedinIn className="icon linkedin" />
      </div>

      {/* Contact Info */}
      <div className="info-card">
        <div className="info-item">
          <MdPhone className="info-icon pink" />
          <div>
            <p className="info-title">Phone</p>
            <p className="info-text">+123 456 7890</p>
          </div>
        </div>

        <div className="info-item">
          <MdEmail className="info-icon blue" />
          <div>
            <p className="info-title">Email</p>
            <p className="info-text">Ajmal@Angainfotech.In</p>
          </div>
        </div>

        <div className="info-item">
          <MdLocationOn className="info-icon red" />
          <div>
            <p className="info-title">Location</p>
            <p className="info-text">Coimbatore, India</p>
          </div>
        </div>

        <div className="info-item">
          <MdCake className="info-icon purple" />
          <div>
            <p className="info-title">Birthday</p>
            <p className="info-text">Dec 16, 1997</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
