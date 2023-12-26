import React, { useState, useEffect } from 'react';
import './CryptocurrencyList.css';
import CryptocurrencyCard from "../CryptocurrencyCard/CryptocurrencyCard";

const CryptocurrencyList = () => {
    const [cryptocurrencyList, setCryptocurrencyList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchCryptocurrencyList = async () => {
            setLoading(true);
            setLoaded(false);

            try {
                const response = await fetch('https://api.kraken.com/0/public/Ticker');
                const data = await response.json();

                console.log(typeof data['result']); // Debugging
                setCryptocurrencyList(Object.entries(data['result']));
                console.log(typeof cryptocurrencyList); // Debugging
            } catch (error) {
                console.error('Error fetching data: ', error);
            }

            setLoading(false);
            setLoaded(true);
            console.log(cryptocurrencyList); // Debugging
        };

        fetchCryptocurrencyList();
    }, []);

    return (
        <div className="cryptocurrency-list">
            {!loading ? (
                <div>
                    {loaded && cryptocurrencyList.length > 0 ? (
                        <div className="home-content">
                            {cryptocurrencyList.map(([key, value], index) => (
                                <CryptocurrencyCard key={index} name={key} value={JSON.stringify(value['a'][0])} />
                            ))}
                        </div>
                    ) : (
                        <p>No cryptocurrencies found.</p>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CryptocurrencyList;
