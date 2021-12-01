import React from 'react';
import 'antd/dist/antd.css';
import './Home.css';
import { Layout, Menu } from 'antd';
import { UserOutlined, ContactsOutlined, DownloadOutlined, ProjectOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Sider } = Layout;


const Home = () => {

    return (
        <Layout className="container">
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" >
                    <h1>Asif Hassan</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to="/home/info">About Me</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ProjectOutlined />}>
                        <Link to="/home/projects">Projects</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContactsOutlined />}>
                        <Link to="/home/contact">Contact Me</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<DownloadOutlined />} onClick={() => window.open("https://drive.google.com/file/d/1xYu4kWdmktLgM8Zq1WqSHWwyh3S5CVrC/view?usp=sharing")}>
                        Download Resume
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;