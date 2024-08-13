import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  console.log(countries);
  function onSubmit(event) {
    event.preventDefault();

    setCountries([
      {
        countryName,
        gold,
        silver,
        bronze,
      },
      ...countries,
    ]);

    setCountryName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  }
  function onUpdate() {
    const targetCountry = countries.find(
      (country) => countryName === country.countryName
    );

    if (targetCountry !== targetCountry) {
      alert("중복된 국가입니다");
      return;
    }

    const newCountries = countries.map((country) => {
      if (country.countryName === targetCountry.countryName) {
        const newCountry = {
          countryName,
          gold,
          silver,
          bronze,
        };
        return newCountry;
      }
      return country;
    });

    console.log(targetCountry);
    setCountries(newCountries);
  }

  function medalTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>국가 </th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.countryName}>
              <td>{country.countryName}</td>
              <td>{country.gold}</td>
              <td>{country.silver}</td>
              <td>{country.bronze}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => onDelete(country.countryName)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  function onDelete(countryName) {
    const filteredCountries = countries.filter((country) => {
      if (countryName === country.countryName) {
        return false;
      }
      return true;
    });
    setCountries(filteredCountries);
  }
  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <form className="input-group" onSubmit={onSubmit}>
        <div>
          <label>국가명</label>
          <input
            type="text"
            placeholder="국가입력"
            name="country"
            value={countryName}
            onChange={(event) => setCountryName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>금메달</label>

          <input
            type="number"
            name="gold"
            value={gold}
            onChange={(event) => setGold(event.target.value)}
          ></input>
        </div>
        <div>
          <label>은메달</label>

          <input
            type="number"
            name="silver"
            value={silver}
            onChange={(event) => setSilver(event.target.value)}
          ></input>
        </div>
        <div>
          <label>동메달</label>

          <input
            type="number"
            name="bronze"
            value={bronze}
            onChange={(event) => setBronze(event.target.value)}
          ></input>
        </div>
        <button type="submit">국가추가</button>
        <button type="button" onClick={onUpdate}>
          업데이트
        </button>
      </form>
      <p>아직 추가된 국가가 없습니다 .메달을 추가하세요 !</p>
      <div>{medalTable()} </div>
    </div>
  );
}

export default App;
