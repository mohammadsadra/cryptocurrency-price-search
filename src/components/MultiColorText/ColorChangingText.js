import React, { useState, useEffect } from 'react';

const colors = ['#E4E6EB'];

const ColorChangingText = ({ text }) => {
    const letters = text.split('');
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ display: 'inline-block' }}>
            {letters.map((letter, index) => (
                <span key={index} style={{ color: colors[(colorIndex + index) % colors.length], transition: 'color 0.8s' }}>
          {letter}
        </span>
            ))}
        </div>
    );
};

export default ColorChangingText;
