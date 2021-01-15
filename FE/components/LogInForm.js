import React from "react";
import Link from "next/link";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import useInput from "../hooks/useInput";
import { loginRequestAction } from "../reducers/user";

const LogInForm = () => {
  const { isLoggingIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = () => {
    dispatch(loginRequestAction({ id, password }));
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
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>
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
