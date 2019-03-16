import React, { useReducer, useEffect, useState } from 'react';
import KeyContext from './keyContext';

const KeyStateProvider = props => {
    var rawdata = [
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
    
    let dataKeys = rawdata.reduce((keyMap,currentkey) => { 
        keyMap[currentkey.keyCode] = false;
        return keyMap;
    },{});

    let reducer = (state, action) => {
      switch(action.type) {
        case 'toggle':
          try {
            return {...state, [action.keyCode] : !state[action.keyCode]};
          } catch(error) {
            return state;
          }
        default:
          return state;
      }
    }


    let [data] = useState(rawdata);
    let [keys, dispatch] = useReducer(reducer, dataKeys);
    let value = {data: data, keyState: { keys, dispatch }};

    const handleKeys = function (event) {
        console.log("handling keys");
        dispatch({type: 'toggle', keyCode: event.keyCode });
        console.log(keys);
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeys, false);
        return () => {
            document.removeEventListener("keydown", handleKeys, false);
        }
    },[]);

    return (
            <KeyContext.Provider value = {value}>
                {props.children}
            </KeyContext.Provider>
        );
}

export default KeyStateProvider;
