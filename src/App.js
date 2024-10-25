import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [principal, setPrincipal] = useState('');
  const [age, setAge] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [rateofInterest, setRateOfInterest] = useState('');
  const [interestEarned, setInterestEarned] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/calculate-interest', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        principal: parseFloat(principal),
        age: parseInt(age),
        investmentPeriod: parseInt(investmentPeriod),
        rateofInterest: parseInt(investmentPeriod),
      }),
    });
    const data = await response.json();
    setInterestEarned(data.interestEarned);
  };

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

    <div className='ultimate-container-div'>
      <div className='container-div'>
        <h1 className='header' >Savings Interest Calculator</h1>
        <form className='form' onSubmit={handleSubmit}>

          <input className='input-element' type="number" placeholder="Principal Amount" value={principal} onChange={(e) => setPrincipal(e.target.value)} required
          />

          <input className='input-element' type="number" placeholder="Age"  value={age} onChange={(e) => setAge(e.target.value)} required
          />

          <input className='input-element' type="number" placeholder="Investment Period (years)" value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(e.target.value)}
            required
          />

          <input className='input-element' type='number' placeholder='Rate of Interest' value={rateofInterest}
            onChange={(e) => setRateOfInterest(e.target.value)}
            />

          <button class='submit-button' type="submit">Get Interest</button>
        </form>

        {interestEarned > 0 && 
        <div className='result-container'>
          <h2 className='result'>Savings Interest is : Rs.{(interestEarned)/100}</h2>
        </div>
        }

      </div>
    </div>
  </>
  );
};

export default App;
