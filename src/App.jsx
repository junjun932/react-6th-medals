import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  console.log(countries);
  function onSubmit(event) {
    event.preventDefault();

    console.log(country, gold, silver, bronze);
    setCountries([
      {
        country,
        gold,
        silver,
        bronze,
      },
      ...countries,
    ]);

    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  }

  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <form className="input-group" onSubmit={onSubmit}>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        ></input>
        <input
          type="number"
          name="gold"
          value={gold}
          onChange={(event) => setGold(event.target.value)}
        ></input>
        <input
          type="number"
          name="silver"
          value={silver}
          onChange={(event) => setSilver(event.target.value)}
        ></input>
        <input
          type="number"
          name="bronze"
          value={bronze}
          onChange={(event) => setBronze(event.target.value)}
        ></input>
        <button type="submit">국가추가</button>
        <button type="button">업데이트</button>
      </form>
      <div>
        {countries.map((country) => (
          <p key={country.country}>
            {country.country} {country.gold} {country.silver}
            {country.bronze}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
