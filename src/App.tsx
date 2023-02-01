import React, {useEffect, useState} from 'react';
import './App.css';
import ColorBox from './components/ColorBox';

function App() {
    const [colors, setColors] = useState<string[]>([]);
    const [answer, setAnswer] = useState('-');
    const [isCorrect, setIsCorrect] = useState('-');

    const NUM_OPTIONS = 3;

    function generateRandomHex(max: number) {
        const randomInt = Math.floor(Math.random() * max);
        return randomInt.toString(16).padStart(2, '0');
    }

    function generateRandomColor() {
        return '#' + generateRandomHex(255) + generateRandomHex(255) + generateRandomHex(255);
    }

    function startGame() {
        const colorsArray = Array.from(Array(NUM_OPTIONS), generateRandomColor);
        setColors(colorsArray);

        const correctAnswer = colorsArray[Math.floor(Math.random() * 3)];
        setAnswer(correctAnswer);

        setIsCorrect('-');
    }

    function optionClicked(color: string) {
        if (color !== answer) return setIsCorrect('Incorrect');

        setIsCorrect('Correct');
    }

    useEffect(() => {
        startGame();
    }, []);

    return (
        <div className='App'>
            <div className={'game-area'}>
                {colors.map(color => <ColorBox key={color} color={color} onClick={optionClicked}/>)}

                <p>Click the square that matches: {answer}</p>
                <p>{isCorrect}</p>
                <button onClick={() => startGame()}>Reset</button>
            </div>
        </div>
    );
}

export default App;
