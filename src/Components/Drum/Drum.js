import  React,{ useContext } from 'react';
import './Drum.css';
import Key  from './../Key/Key';
import KeyContext from '../KeyStateProvider/keyContext'; 

const Drum = props => {
    const keyContextConsumer = useContext(KeyContext); 
    return (<div className = "drum">
        { <div className="keys">
            {
                keyContextConsumer.data.map((keyData,i) => <Key key={i} 
                keyCode={keyData.keyCode} keyName={keyData.keyName}
                sound={keyData.sound} playSound={keyContextConsumer.keyState.keys[keyData.keyCode]}/>)
            }
        </div> }
    </div>);
}

export default Drum;