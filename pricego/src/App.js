import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
function App() {
  const SERVICE_KEY =
    "BDIQM2MLmZe%2BAFeyzie3RHF7Htga0FQJZrzyFF%2FXeSln%2BD9%2FCNLytrj2c1vS0Xe1jGg03OAx3eSkMRuiy7oC9Q%3D%3D";
  const [code, setCode] = useState("");
  const url = `http://openapi.price.go.kr/openApiImpl/ProductPriceInfoService/getProductInfoSvc.do?serviceKey=${SERVICE_KEY}&goodId=${code}`;
  const [result, setResult] = useState({});

  const ChangeCode = (e) => {
    setCode(e.target.value);
  };

  const SaerchCode = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: `get`,
          url: url,
        });
        console.log(data);
        setResult(data);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <AppWrap>
      <input
        type="text"
        placeholder="코드를 입력하세요"
        value={code}
        onChange={ChangeCode}
        onKeyDown={SaerchCode}
      />
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
`;
