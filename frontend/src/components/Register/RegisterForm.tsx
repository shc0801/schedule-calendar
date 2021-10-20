import React, { FC, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import Api from "../../apis";
import { LogoImg } from "../../assets/icon";
import { pageMove } from "../../modules/actions";

const Container = styled.form`
  font-size: 1.4em;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const Logo = styled.img`
  width: 60px;
`;

const RegisterFormTitle = styled.p`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  margin-bottom: 20px;
`;

const RegisterIdInput = styled.input`
  width: 20vw;

  margin-bottom: 20px;
  padding: 12px 24px 12px 16px;
  border: 0;
  border-radius: 10px;
`;

const RegisterNameInput = styled.input`
  width: 20vw;

  margin-bottom: 20px;
  padding: 12px 24px 12px 16px;
  border: 0;
  border-radius: 10px;
`;

const RegisterPwInput = styled.input`
  width: 20vw;

  margin-bottom: 20px;
  padding: 12px 24px 12px 16px;
  border: 0;
  border-radius: 10px;
`;

const RegisterPw2Input = styled.input`
  width: 20vw;

  padding: 12px 24px 12px 16px;
  border: 0;
  border-radius: 10px;
`;

const RegisterBtn = styled.div`
  width: 20vw;
  background-color: #6d6ec7;

  color: #fff;
  font-size: 0.7em;
  font-weight: 700;
  text-align: center;

  margin-top: 30px;
  padding: 15px 0;
  border-radius: 10px;
  cursor: pointer;
`;

const GoLoginText = styled.span`
  font-size: 0.7em;
  font-weight: 700;

  margin-top: 30px;
`;

const GoLoginTextU = styled.u`
  font-weight: 700;
  cursor: pointer;
`;

const RegisterForm: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const goLoginPage = () => {
    dispatch(pageMove({ page: "/login" }));
    history.push("/login");
  };

  const [input, setInput] = useState({
    user_id: "",
    user_name: "",
    user_pass: "",
    user_pass2: "",
  });
  const { user_id, user_name, user_pass, user_pass2 } = input;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const Submit = async () => {
    if (
      user_id.trim() === "" ||
      user_name.trim() === "" ||
      user_pass.trim() === "" ||
      user_pass2.trim() === ""
    ) {
      toast.error("공백이 존재합니다!", {
        style: {
          border: "1px solid #6d6ec7",
          padding: "16px",
          color: "#6d6ec7",
        },
        iconTheme: {
          primary: "#6d6ec7",
          secondary: "#FFFAEE",
        },
      });
      return;
    }
    if (user_pass !== user_pass2) {
      toast.error("비밀번호가 일치하지 않습니다!", {
        style: {
          border: "1px solid #6d6ec7",
          padding: "16px",
          color: "#6d6ec7",
        },
        iconTheme: {
          primary: "#6d6ec7",
          secondary: "#FFFAEE",
        },
      });
      return;
    }
    
    Api.post("/register", { user_id, user_name, user_pass })
    .then(res => {
      alert("회원가입 되었습니다!");
      goLoginPage();
    })
    .catch(err => {
      toast.error(err.response.data.msg);
      throw err;
    }) 
  };

  return (
    <Container>
      <Logo src={LogoImg} />
      <RegisterFormTitle>Scheder</RegisterFormTitle>
      <RegisterIdInput
        name="user_id"
        onChange={onChangeInput}
        placeholder="아이디"
      />
      <RegisterNameInput
        name="user_name"
        onChange={onChangeInput}
        placeholder="이름"
      />
      <RegisterPwInput
        name="user_pass"
        onChange={onChangeInput}
        type="password"
        placeholder="비밀번호"
      />
      <RegisterPw2Input
        name="user_pass2"
        onChange={onChangeInput}
        type="password"
        placeholder="비밀번호 확인"
      />
      <RegisterBtn onClick={Submit}>회원가입</RegisterBtn>
      <GoLoginText>
        다시 돌아가고 싶으신가요?{" "}
        <GoLoginTextU onClick={goLoginPage}>로그인</GoLoginTextU>
      </GoLoginText>
    </Container>
  );
};

export default RegisterForm;
