import React from "react";
import PropTypes from "prop-types";
import './MusicVideo.css'

const MusicVideo = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/xq9CosdrjVc`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

MusicVideo.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default MusicVideo;