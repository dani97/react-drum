import React, {Component} from 'react';
import KeyContext from './keyContext';

var data = [
    {
      "id": 1,
      "keyCode": 65,
      "keyName": 'A',
      "sound": "clap.wav"
    },
    {
      "id": 2,
      "keyCode": 83,
      "keyName": 'S',
      "sound" : "hihat.wav"
    },
    {
      "id": 3,
      "keyCode": 68,
      "keyName": 'D',
      "sound": "kick.wav"
    },
    {
      "id": 4,
      "keyCode": 70,
      "keyName": 'F',
      "sound": "openhat.wav"
    },
    {
      "id": 5,
      "keyCode": 71,
      "keyName": 'G',
      "sound": "boom.wav"
    },
    {
      "id": 6,
      "keyCode": 72,
      "keyName": 'H',
      "sound": "ride.wav"
    },
    {
      "id": 7,
      "keyCode": 74,
      "keyName": 'J',
      "sound": "snare.wav"
    },
    {
      "id": 8,
      "keyCode": 75,
      "keyName": 'K',
      "sound": "tom.wav"
    },
    {
      "id": 9,
      "keyCode": 76,
      "keyName": 'L',
      "sound": "tink.wav"
    }
];

var keys = data.reduce((keyMap,currentkey) => { 
    keyMap[currentkey.keyCode] = false;
    return keyMap;
},{});



class KeyStateProvider extends Component {
    constructor(props) {
        super(props);
        this.handleKeys = this.handleKeys.bind(this);
    }
    state = {
        data: data,
        keys: keys
    }

    handleKeys(event) {
        var keys = this.state.keys;
        if(keys[event.keyCode] === undefined) return; 
        keys[event.keyCode] = !keys[event.keyCode];
        this.setState ({
            keys: keys
        });
    }
    
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeys, false);
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeys, false);
    }
    
    render () {
        return (
            <KeyContext.Provider value = {{
                state: this.state
            }}>
                {this.props.children}
            </KeyContext.Provider>
        );
    }
}

export default KeyStateProvider;
