import React from 'react';
import './App.css';
import ColorBox from './components/ColorBox';

function App() {
    return (
        <div className='App'>
            <div className={'game-area'}>
                <ColorBox color={"red"}/>
                <ColorBox color={"lime"}/>
                <ColorBox color={"aqua"}/>

                <p>Click the square that matches: COLOR</p>
                <p>-</p>
                <button>Reset</button>
            </div>
        </div>
    );
}

export default App;
