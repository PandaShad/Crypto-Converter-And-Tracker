import NavBar from "./components/NavBar";
import axios from "axios";
import React, {useState, useEffect} from 'react';
import Coins from "./componentsTracker/Coins";
import './componentsTracker/CryptoTrackerApp.css';

function CryptoTrackerApp() {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(response => {
            setCoins(response.data)
        }).catch(error => console.log(error))
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    )


  return (
    <div className="tracker-app">
      <NavBar />
      <div className="tracker-app-wrapper">
          <div className="coin-search">
              <h1 className="coin-text">Search a Currency</h1>
              <form>
                  <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
              </form>
          </div>
      </div>
      {filteredCoins.map(coin => {
          return(
              <Coins 
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
            />
          )
      })}
    </div>
  );
}

export default CryptoTrackerApp;
