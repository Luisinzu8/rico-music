import React from "react";
import PropTypes from "prop-types";
import './MusicPlayer.css'

const MusicPlayer = () => (
    <div className="musicPlayer">
        <iframe src="https://open.spotify.com/embed/track/5J7FZWKiSFi8K3GkcUoOmI" width="340" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
  
  
  export default MusicPlayer;