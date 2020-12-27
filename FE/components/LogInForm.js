import React, { useState } from "react";
import Link from "next/link";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const LogInForm = ({ setIsLoggedIn }) => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = () => {
    console.log(id, password);
    setIsLoggedIn(true);
  };

  return (
    <StyledForm onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
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
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signUp">
          <Button>
            <a>회원가입</a>
          </Button>
        </Link>
      </ButtonWrapper>
    </StyledForm>
  );
};

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const StyledForm = styled(Form)`
  padding: 10px;
`;

export default LogInForm;
