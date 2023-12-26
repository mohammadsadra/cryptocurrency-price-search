import React, {useEffect, useRef} from 'react';
import './CryptocurrencyCard.css';

const CryptocurrencyCard = ({ name, value, key }) => {
    const cardRef = useRef(null);
    useEffect(() => {
        cardRef.current.classList.add('visible');
    }, []);
    return (
        <div key={key} className="cardContainer card" ref={cardRef}>
            <div className="title">{name.replace('/', ' / ')}</div>
            <div className="price">€{value}</div>
        </div>
    );
};

export default CryptocurrencyCard;
