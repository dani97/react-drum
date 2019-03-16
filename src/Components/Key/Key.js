import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import './Key.css';

const Key = props => {
    var [audio] = useState(new Audio(require(`../../Assets/sounds/${props.sound}`)));
    var [isPlaying, setIsPlaying] = useState(false);
    const playSound = function() {
        audio.currentTime = 0;
        audio.play();
        setIsPlaying(true);
    }

    const handleTransition = function() {
        setIsPlaying(false);
    }

    useEffect(() => {
        playSound();
    },[props.playSound]);


    var classes = `key ${isPlaying?'playing':''}`;
    return (
        <div className={classes} onClick={playSound} onTransitionEnd={handleTransition} >
            <span className="keycode"> {props.keyName} </span>
        </div>
    );
    
}

Key.propTypes = {
    keyName: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired,
    playSound: PropTypes.bool.isRequired
}

export default Key;