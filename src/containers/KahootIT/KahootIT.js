import React from 'react';
import './KahootIT.css';

function Enter() {
    
}

export const CreateKahootITRegister = () => {
    return(
        <div>
            <h1>Kahoot!</h1>
            <ul>
                <li><input>Game PIN</input></li>
                <li><button onClick={Enter}>Enter</button></li>
            </ul>
        </div>
    );
}
