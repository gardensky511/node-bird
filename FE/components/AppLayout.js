import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import UserProfile from './UserProfile';
import LogInForm from './LogInForm';
import useInput from '../hooks/useInput';

const AppLayout = ({ children }) => {
  const [searchInput, onChangeSearchInput] = useInput('');

  // useSelector는 리덕스 상태값을 조회하기 위한 함수
  const { me } = useSelector((state) => state.user);

  const onSearch = () => Router.push(`/hashtag/${searchInput}`);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput
            enterButton
            value={searchInput}
            onChange={onChangeSearchInput}
            onSearch={onSearch}
          />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LogInForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://zenn.dev/luvmini511"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jeongmin
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

export default AppLayout;
