import React from 'react';
import { List, Button, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { REMOVE_FOLLOWER_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowingList = ({ header, data }) => {
  const dispatch = useDispatch();
  const onCancel = (id) => () => {
    if (header === '팔로잉 목록') {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: id,
      });
    }
    dispatch({
      type: REMOVE_FOLLOWER_REQUEST,
      data: id,
    });
  };
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={(
        <LoadMoreWrapper>
          <Button>더 보기</Button>
        </LoadMoreWrapper>
      )}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

const LoadMoreWrapper = styled.div`
  text-align: center;
  margin: 10px 0;
`;

export default FollowingList;
