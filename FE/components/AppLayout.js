import React, { useState } from 'react';
import Link from "next/link";
import { Menu, Input, Row, Col } from 'antd'
import styled from "styled-components";

import UserProfile from "./UserProfile";
import LogInForm from "./LogInForm";

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signUp"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row　gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LogInForm /> }
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://zenn.dev/luvmini511" target='_blank' rel='noopener noreferrer'>Jeongmin</a>
                </Col>
            </Row>
            
        </div>
    );
};

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`

export default AppLayout;
