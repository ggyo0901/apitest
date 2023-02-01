import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const User = {
  email: "maxsdf@naver.com",
  pw: "dlwjdals92!",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPw, setCheckPw] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const changeEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };
  const changePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setCheckPw(true);
    } else {
      setCheckPw(false);
    }
  };

  useEffect(() => {
    if (checkEmail && checkPw) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [checkEmail, checkPw]);

  const clickConfirmBtn = () => {
    if (email === User.email && pw === User.pw) {
      alert("로그인에 성공했습니다");
    } else {
      alert("등록되지 않은 회원입니다");
    }
  };

  return (
    <div className="page">
      <div className="title">
        이메일과 비밀번호를
        <br />
        입력해주세요
      </div>
      <div className="content">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            placeholder="test@gmail.com"
            value={email}
            onChange={changeEmail}
          />
        </div>

        <div className="errorMessageWrap">
          {!checkEmail && email.length > 0 && (
            <div className="errorMessage">올바른 이메일을 입력해주세요</div>
          )}
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder="영문,숫자,특수문자 포함 8자 이상"
            value={pw}
            onChange={changePw}
          />
        </div>

        <div className="errorMessageWrap">
          {!checkPw && pw.length > 0 && (
            <div className="errorMessage">
              영문,숫자,특수문자 포함 8자 이상 입력해주세요
            </div>
          )}
        </div>
      </div>
      <div>
        <button
          disabled={notAllow}
          className="bottomBtn"
          onClick={clickConfirmBtn}
        >
          확인
        </button>
      </div>
    </div>
  );
}
