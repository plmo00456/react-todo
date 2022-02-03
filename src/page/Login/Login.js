import { useEffect, useState } from "react";

import axios from "axios";

import "./Login.scss";
import { MdLogin } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("ID : " + inputId);
    console.log("PW : " + inputPw);

    axios({
      url: "http://localhost:8080/api/login",
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      data: JSON.stringify({
        USR_ID: inputId,
        USR_PW: inputPw,
      }),
    }).then((res) => {
      console.log(res);
      if (!res.data.result) {
        //alert("아이디와 비밀번호를 확인해 주세요.");
        //return false;
      }
      localStorage.setItem("jwt", res.data.accessToken);
    });
  };

  useEffect(() => {
    const leftLayout = document.querySelector(".layout.left");
    if (leftLayout != null) leftLayout.remove();
    const headerLayout = document.querySelector(".layout.header");
    if (headerLayout != null) headerLayout.remove();
  }, []);
  return (
    <div className="layout login">
      <div className="wrap">
        <div className="container">
          <div className="login-link">
            <div className="kakao">
              <div className="icon-kakao" />
              <span>Kakao</span>
            </div>
            <div className="google">
              <div className="icon-google" />
              Google
            </div>
            <div></div>
          </div>
          <div className="input-wrap">
            <input
              type="text"
              name="USR_ID"
              className="input-box"
              placeholder="아이디"
              id="usrId"
              onChange={handleInputId}
            />
            <label htmlFor="usrId">
              <BiUser />
            </label>

            <input
              type="password"
              name="USR_PW"
              className="input-box"
              placeholder="패스워드"
              onChange={handleInputPw}
            />
            <label htmlFor="usrPw">
              <AiOutlineLock />
            </label>
          </div>
          <button onClick={onClickLogin} className="input-btn">
            <MdLogin />
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
