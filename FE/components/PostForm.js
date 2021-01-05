import React, { useState, useRef } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  const { imagePaths } = useSelector((state) => state.post);
  const [text, setText] = useState("");

  const onChangeText = (event) => setText(event.target.value);
  const onSubmit = () => {
    dispatch(addPost);
    setText("");
  };
  const onClickImageUpload = () => imageInput.current.click();

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="뭔가 써봅시다"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((imagePath) => (
          <div key={imagePath} style={{ display: "inline-block" }}>
            <img
              src={imagePath}
              style={{ width: "200px" }}
              alt="Posted Image"
            />
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
