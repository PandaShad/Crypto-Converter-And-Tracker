import ExchangeRate from "./ExchangeRate";
import { useState } from 'react';
import axios from 'axios';

function CurrencyConverter() {
    const currencies = ['BTC', 'ETH', 'USD', 'EUR', 'XRP', 'LTC', 'ADA'];
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
    const [amount, setAmount] = useState(1);
    // const [exchangeRate, setExchangeRate] = useState(0);
    const [result, setResult] = useState(0)
    // const [chosenPrimaryCurrencyExchanged, setChosenPrimaryCurrencyExchanged] = useState('BTC')
    // const [chosenSecondaryCurrencyExchanged, setChosenSecondaryCurrencyExchanged] = useState('BTC')
    const [exchangedData, setExchangeData] = useState({
        primaryCurrency: 'BTC',
        secondaryCurrency: 'BTC',
        exchangeRate: 0
    })


    const convert = () => {
        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
            headers: {
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
        };

        axios.request(options).then((response) => {
            // setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
            setResult((response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])* amount)
            // setChosenPrimaryCurrencyExchanged(chosenPrimaryCurrency)
            // setChosenSecondaryCurrencyExchanged(chosenSecondaryCurrency)
            setExchangeData({
                primaryCurrency: chosenPrimaryCurrency,
                secondaryCurrency: chosenSecondaryCurrency,
                exchangeRate: response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
            })
        }).catch((error) => {
	        console.error(error);
        });
    };

    // console.log("Primary : " + chosenPrimaryCurrency);
    // console.log("Secondary : " + chosenSecondaryCurrency);
    // console.log("Amount : " + amount);
    // console.log(exchangeRate);

    return (
      <div className="currency-converter">
        <h2 className="title is-3">Currency Converter</h2>

        <div className="input-box">
            <table class="table is-striped is-hoverable">
                <tbody>
                    <tr>
                        <td>Primary Currency</td>
                        <td>
                            <input
                                class="input is-primary is-rounded is-small"
                                type="number"
                                name="currency-amount-1" 
                                value={amount}
                                onChange={(event) => setAmount(event.target.value)}
                            />
                        </td>
                        <td>
                            <div class="select is-primary is-rounded is-small">
                            <select
                                value={chosenPrimaryCurrency}
                                name="currency-option-1"
                                className="currency-options"
                                onChange={(event) => setChosenPrimaryCurrency(event.target.value)}>
                                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                            </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Secondary Currency</td>
                        <td>
                            <input
                                class="input is-info is-rounded is-small"
                                name="currency-amount-2" 
                                value={result}
                                disabled={true}
                            />
                        </td>
                        <td>
                            <div class="select is-info is-rounded is-small">
                                <select 
                                    value={chosenSecondaryCurrency}
                                    name="currency-option-2"
                                    className="currency-options"
                                    onChange={(event) => setChosenSecondaryCurrency(event.target.value)}>
                                        {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                                </select>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button class="button is-primary" id="convert-button" onClick={convert}>Convert</button>

        </div>

        <ExchangeRate 
            exchangeData = {exchangedData}
            // chosenPrimaryCurrency={chosenPrimaryCurrencyExchanged}
            // chosenSecondaryCurrency={chosenSecondaryCurrencyExchanged}
        />
      </div>
    );
  }
  
  export default CurrencyConverter;
  