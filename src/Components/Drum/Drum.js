import  React,{ Component } from 'react';
import './Drum.css';
import Key  from './../Key/Key';
import KeyContext from '../KeyStateProvider/keyContext'; 

class Drum extends Component {
    render() {
        return (
            <KeyContext.Consumer>
                {(context) => (
                <div className = "drum">
                    <div className="keys">
                    {
                       context.state.data.map((keyData,i) => <Key key={i} 
                       keyCode={keyData.keyCode} keyName={keyData.keyName}
                       sound={keyData.sound} playSound={context.state.keys[keyData.keyCode]}/>)
                    }
                    </div>
                </div>
                )
                }
            </KeyContext.Consumer>
        )
    }

    
}

export default Drum;