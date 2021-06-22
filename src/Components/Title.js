import React from "react";
import PropTypes from "prop-types";
import './Title.css';
import background from '../img/billBoard.jpeg'

const font =  "'Rock Salt', Cursive";

const Title = () => (
    <div className="title" 
        style={{ 
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            height:'auto',
            width:'100%',
            fontFamily: font
        }}>
        <h1>Drew Amour</h1>
    </div>
  );
  
  
  export default Title;