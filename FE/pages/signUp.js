import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const SignUp = () => {
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const onChangePasswordCheck = (event) => {
    setPasswordCheck(event.target.value);
    setPasswordError(event.target.value !== password);
  };

  const [termError, setTermError] = useState(false);
  const [term, setTerm] = useState("");
  const onChangeTerm = (event) => {
    setTerm(event.target.checked);
    setTermError(false);
  };

  const onSubmit = () => {
    if (password !== passwordCheck) setPasswordError(true);
    if (!term) setTermError(true);
    console.log(id, nickname, password);
  };

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-id">닉네임</label>
          <br />
          <Input
            name="user-nickname"
            value={nickname}
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            value={password}
            type="password"
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <label htmlFor="user-id">비밀번호 체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            정민님 말을 잘 들을 것에 동의합니다
            {termError && <ErrorMessage>약관에 동의하셔야 합니다</ErrorMessage>}
          </Checkbox>
        </div>
        <SubmitButton>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </SubmitButton>
      </Form>
    </AppLayout>
  );
};

const ErrorMessage = styled.div`
  color: red;
`;

const SubmitButton = styled.div`
  margin-top: 10px;
`;

export default SignUp;
