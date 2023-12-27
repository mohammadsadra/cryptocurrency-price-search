import React, { useState, useEffect } from 'react';
import './CryptocurrencyList.css';
import CryptocurrencyCard from "../CryptocurrencyCard/CryptocurrencyCard";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";

const CryptocurrencyList = () => {
    const [cryptocurrencyList, setCryptocurrencyList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCryptocurrencyList = async () => {
            setLoading(true);
            setLoaded(false);
            try {
                const response = await fetch('https://api.kraken.com/0/public/Ticker');
                const data = await response.json();
                setCryptocurrencyList(Object.entries(data['result']));
                console.log(cryptocurrencyList);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
            setLoading(false);
            setLoaded(true);
        };

        fetchCryptocurrencyList().then(() => {
            console.log(cryptocurrencyList);
        });
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className="cryptocurrency-list">
                {!loading ? (
                    <div>
                        {loaded && cryptocurrencyList.length > 0 ? (
                            <div className="home-content">
                                {cryptocurrencyList.filter(item =>
                                    (
                                        JSON.stringify(item[0]).toLowerCase().includes(searchTerm.toLowerCase())
                                    )
                                ).map(([key, value], index) => (
                                    <CryptocurrencyCard key={index} name={key} value={JSON.stringify(value['a'][0])} />
                                ))}
                            </div>
                        ) : (
                            <p>No cryptocurrencies found.</p>
                        )}
                    </div>
                ) : (
                    <Loading/>
                )}
            </div>
        </div>
    );
};

export default CryptocurrencyList;
