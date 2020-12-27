import React from "react";
import styled from "styled-components";
import { Form, Input } from "antd";

const NicknameEditForm = () => {
  return (
    <Form
      style={{ marginBottom: 20, border: "1px solid #d9d9d9", padding: 20 }}
    >
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
};

export default NicknameEditForm;
