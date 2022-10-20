import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import dmsBack from "./dsmBack.png";

function App() {
  const [raffleNumber, setRaffleNumber] = useState();
  useEffect(() => {
    const raffle = localStorage.getItem("raffle_number");
    !!raffle ? setRaffleNumber(raffle) : getRaffleNumber();
  }, []);

  const getRaffleNumber = async () => {
    try {
      const raffleData = (await axios.post("https://qr.dsm-pick.com")).data;
      localStorage.setItem("raffle_number", raffleData);
      setRaffleNumber(raffleData);
    } catch (error) {
      alert("에러가 발생하였습니다,");
      setRaffleNumber(-9999);
    }
  };

  return (
    <div
      id="container"
      style={{
        backgroundImage: `url(${dmsBack})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 style={{ fontWeight: 300 }}>추첨번호는</h2>
      <h1
        style={{ margin: 0, fontSize: "90px" }}
        className={raffleNumber === -9999 ? "error" : ""}
      >
        {raffleNumber}
      </h1>
      <h2 style={{ fontWeight: 300 }}>입니다.</h2>
      <div className="copyRight">
        Copyrightⓒ 대덕소프트웨어마이스터고등학교 학생회. All rights reserved.
      </div>
    </div>
  );
}

export default App;
