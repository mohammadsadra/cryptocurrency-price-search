import './App.css';
import Header from "./components/Header/Header";
import CryptocurrencyList from "./components/CryptocurrencyList/CryptocurrencyList";

function App() {
  return (
    <div className="App">
        <Header/>
        <CryptocurrencyList/>
    </div>
  );
}

export default App;
