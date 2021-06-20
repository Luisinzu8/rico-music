import React from "react";
import PropTypes from "prop-types";
import './Header.css';

const Header = () => (
    <div className="header">
        <div className="mediaLinks">
            <ul>
                <li className="instagram">
                    <a href="https://www.instagram.com/drewamour/"><i className="fa fa-instagram" /></a>
                </li>
                <li className="twitter">
                <a href="#"><i className="fa fa-twitter" /></a>
                </li>
                <li className="spotify">
                <a href="#"><i className="fa fa-spotify" /></a>
                </li>
                <li className="apple">
                <a href="#"><i className="fa fa-apple" /></a>
                </li>
                <li className="soundcloud">
                <a href="#"><i className="fa fa-soundcloud" /></a>
                </li>
                <li className="youtube">
                <a href="https://www.youtube.com/channel/UC9b4FOfWyBar62iC2Rk0qtw"><i className="fa fa-youtube" /></a>
                </li>
            </ul>
        </div>
    </div>
  );
  
  
  export default Header;