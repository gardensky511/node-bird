import React from 'react';
import Link from "next/link";
import { Menu, Input, Row, Col } from 'antd'

const AppLayout = ({ children }) => {
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
                    <Input.Search enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signUp"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row　gutter={8}>
                <Col xs={24} md={6}>
                    왼쪽 메뉴
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

export default AppLayout;
