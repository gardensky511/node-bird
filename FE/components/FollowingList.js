import React from "react";
import { List, Button, Card } from "antd";
import { StopOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Header = (header) => <div>{header}</div>;

const LoadMore = () => (
  <LoadMoreWrapper>
    <Button>더 보기</Button>
  </LoadMoreWrapper>
);

const RenderItem = (item) => (
  <List.Item style={{ marginTop: 20 }}>
    <Card actions={[<StopOutlined key="stop" />]}>
      <Card.Meta description={item.nickname} />
    </Card>
  </List.Item>
);

const FollowingList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={Header(header)}
      loadMore={LoadMore()}
      bordered
      dataSource={data}
      renderItem={(item) => RenderItem(item)}
    />
  );
};

const LoadMoreWrapper = styled.div`
  text-align: center;
  margin: 10px 0;
`;

export default FollowingList;
