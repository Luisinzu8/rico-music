import React from "react";
import PropTypes from "prop-types";
import './Header.css';
import MusicPlayer from "./MusicPlayer";

const Header = () => (
    <div className="header">
        <MusicPlayer />
        <div className="mediaLinks">
            <ul>
                <li className="twitter">
                <a href="https://twitter.com/drewamourr?lang=en"><i className="fa fa-twitter" /></a>
                </li>
                <li className="amazon">
                <a href="https://music.amazon.com/artists/B08QVPCD19/drew-amour"><i className="fa fa-amazon" /></a>
                </li>
                <li className="soundcloud">
                <a href="https://soundcloud.com/user-535017798"><i className="fa fa-soundcloud" /></a>
                </li>
                <li className="apple">
                <a href="https://music.apple.com/us/artist/drew-amour/1545298569"><i className="fa fa-apple" /></a>
                </li>
                <li className="spotify">
                <a href="https://open.spotify.com/artist/55GUlWhLKuRMO8W6MQW2rS?si=FWoUmM2bRHmFT-ovvF2zsQ&dl_branch=1"><i className="fa fa-spotify" /></a>
                </li>
                <li className="youtube">
                <a href="https://www.youtube.com/channel/UC9b4FOfWyBar62iC2Rk0qtw"><i className="fa fa-youtube" /></a>
                </li>
                <li className="instagram">
                    <a href="https://www.instagram.com/drewamour/"><i className="fa fa-instagram" /></a>
                </li>
            </ul>
        </div>
    </div>
  );
  
  
  export default Header;