import React, { useRef, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST, addPost, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST } from '../reducers/post';
import useInput from '../hooks/useInput';

const PostForm = () => {
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput('');

  useEffect(() => {
    if (addPostDone) setText('');
  }, [addPostDone]);

  const onSubmit = () => {
    if (!text || !text.trim()) alert('게시글을 작성하세요');
    const formData = new FormData();
    imagePaths.forEach((imagePath) => {
      formData.append('image', imagePath);
    });
    formData.append('content', text);
    return dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  };

  const imageInput = useRef();

  const onClickImageUpload = () => imageInput.current.click();

  const onChangeImages = (event) => {
    console.log('images', event.target.files);
    const imageFormData = new FormData();
    [].forEach.call(event.target.files, (file) => {
      imageFormData.append('image', file);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  };

  const onRemoveImage = (index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    });
  };

  return (
    <Form
      style={{ margin: '10px 0 20px' }}
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
        <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((imagePath, index) => (
          <div key={imagePath} style={{ display: 'inline-block' }}>
            <img
              src={`http://localhost:3065/${imagePath}`}
              style={{ width: '200px' }}
              alt="Posted Image"
            />
            <div>
              <Button onClick={onRemoveImage(index)}>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
