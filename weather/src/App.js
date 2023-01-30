import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
function App() {
  const API_KEY = `2db43eeb43ec73fca9c846bd38d8ccee`;

  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const [result, setRsult] = useState({});

  const ChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  const SaerchWether = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: `get`,
          url: url,
        });
        console.log(data);
        setRsult(data);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <AppWrap>
      <div className="wrap">
        <input
          type="text"
          placeholder="도시를 입력해주세요"
          value={location}
          onChange={ChangeLocation}
          onKeyDown={SaerchWether}
        />

        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div>{result.data.name}</div>
            <div>
              {Math.round((result.data.main.temp - 273.15) * 10) / 10}도
            </div>
            <div>{result.data.weather[0].main}</div>
          </ResultWrap>
        )}
      </div>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid red;

  .wrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border: 1px blue solid;
    padding: 20px;
  }
`;
const ResultWrap = styled.div`
  margin-top: 60px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
`;
