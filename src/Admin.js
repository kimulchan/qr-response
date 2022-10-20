import { useEffect, useState } from "react";
import "./App.css";
import dmsBack from "./dsmBack.png";
import axios from "axios";
const Admin = () => {
  const [guestCount, setGuestCount] = useState(0);
  useEffect(() => {
    const getGuestCount = async () => {
      try {
        const guestData = (await axios.get("https://qr.dsm-pick.com")).data;
        setGuestCount(guestData);
      } catch (e) {
        alert("유저 정보를 불러오지 못했습니다.");
      }
    };
    getGuestCount();
  }, []);
  return (
    <div
      id="container"
      style={{
        backgroundImage: `url(${dmsBack})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 style={{ fontWeight: 300 }}>방문자 수는</h2>
      <h1 style={{ margin: 0, fontSize: "90px" }}>{guestCount}</h1>
      <h2 style={{ fontWeight: 300 }}>입니다.</h2>
      <div className="copyRight">
        Copyrightⓒ 대덕소프트웨어마이스터고등학교 학생회. All rights reserved.
      </div>
    </div>
  );
};

export default Admin;
