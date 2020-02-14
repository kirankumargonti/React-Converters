import React, { useState, useEffect } from 'react';
import CurrencyConverter from './CurrencyConverter';
import PercentageConverter from './PercentageConverter';

export default function Home() {
  const apiURL = 'https://api.exchangeratesapi.io/latest';

  // Currency Converter
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState(1);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  // Percentage Converter
  const [percentage, setPercentage] = useState(1);
  const [valueInFromPercentage, setValueInFromPercentage] = useState(true);

  // Currency Converter

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  // Percentage Converter

  let toPercentage, fromPercentage;
  if (valueInFromPercentage) {
    fromPercentage = percentage;
    if (fromPercentage >= 11) {
      alert('CGPA can only be between 0-10');
    } else {
      toPercentage = percentage * 9.5;
    }
  } else {
    toPercentage = percentage;
    if(toPercentage >=101) {
      alert('Percentage can only be between 0-100');
    } else {
      fromPercentage = percentage / 9.5;
    }
  }

  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        const firstCurrencyOption = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrencyOption);
        setExchangeRate(data.rates[firstCurrencyOption]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${apiURL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  // Currency Converter
  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  // Percentage Converter
  function handleFromPercentage(e) {
    setPercentage(e.target.value);
    setValueInFromPercentage(true);
  }
  function handleToPercentage(e) {
    setPercentage(e.target.value);
    setValueInFromPercentage(false);
  }

  return (
    <div>
      <section class="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-left">
                <h1 className="text-capitalize">welcome to Convert Anything</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-right">
                <h1>Convert Currency</h1>
                <CurrencyConverter
                  currencyOptions={currencyOptions}
                  selectedCurrency={fromCurrency}
                  onChangeCurrency={e => setFromCurrency(e.target.value)}
                  onChangeAmount={handleFromAmountChange}
                  amount={fromAmount}
                />

                <CurrencyConverter
                  currencyOptions={currencyOptions}
                  selectedCurrency={toCurrency}
                  onChangeCurrency={e => setToCurrency(e.target.value)}
                  onChangeAmount={handleToAmountChange}
                  amount={toAmount}
                />

                <h1>Convert CGPA to %</h1>

                <PercentageConverter
                  percentage={fromPercentage}
                  onChangePercentage={handleFromPercentage}
                />
                <PercentageConverter
                  percentage={toPercentage}
                  onChangePercentage={handleToPercentage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
