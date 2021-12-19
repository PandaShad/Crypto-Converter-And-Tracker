import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <h1>Crypto DashBoard</h1> */}
      <div className="app-wrapper">
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
