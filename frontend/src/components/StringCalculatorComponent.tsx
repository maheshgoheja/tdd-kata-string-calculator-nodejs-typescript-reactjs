import React, { useState } from 'react';
import { StringCalculator } from '../../../src/stringCalculator';

function StringCalculatorComponent() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<number | string>(0);
    const calculator = new StringCalculator();

    const calculateSum = () => {
        try {
            const sum = calculator.add(input);
            setResult(sum);
        } catch (error: any) {
            setResult(error.message);
        }
    };

    return (
        <div>
            <h2>String Calculator</h2>
            <textarea
                placeholder="Enter numbers string"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={4}
                cols={50}
            />
            <br />
            <button onClick={calculateSum}>Calculate Sum</button>
            <p>Result: {result}</p>
        </div>
    );
}

export default StringCalculatorComponent;