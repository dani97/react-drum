import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Key.css';

class Key extends Component {

    static propTypes = {
        keyName: PropTypes.string.isRequired,
        sound: PropTypes.string.isRequired,
        playSound: PropTypes.bool.isRequired
    };

    static defaultProps = {
        playSound: false
    }

    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.handleTransition = this.handleTransition.bind(this);
        this.audio = new Audio(require(`../../Assets/sounds/${this.props.sound}`));
        this.state  = {
            playing: false
        };
    }
    playSound() {
        this.audio.currentTime = 0;
        this.audio.play();
        this.setState({
            playing: true
        });
    }

    handleTransition() {
        this.setState({
            playing: false
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.playSound === this.props.playSound) return;
        this.playSound();
    }

    render() {
        var classes = `key ${this.state.playing?'playing':''}`;
        return (
            <div className={classes} onClick={this.playSound} onTransitionEnd={this.handleTransition} >
                <span className="keycode"> {this.props.keyName} </span>
            </div>
        );
    }
}

export default Key;