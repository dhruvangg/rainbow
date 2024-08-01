import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Flex, Image, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import { HomeFilled, UnorderedListOutlined } from '@ant-design/icons';
import { useState } from "react";
import Logo from './assets/bg.png'
import Home from "./pages/Home";

const items = [
  {
    key: 'mail',
    icon: <Link to={'/'}><HomeFilled /></Link>,
    label: 'Home',
    to: '/'
  },
  {
    key: 'alipay',
    icon: <Link to={'/cart'}><UnorderedListOutlined /></Link>,
    label: 'Cart',
    to: '/cart'
  },
];

export default function App() {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Header
          style={{
            padding: 0,
            position: 'sticky',
            top: 0,
            background: "#fff",
            zIndex: 1
          }}
        >
          <div className="flex space-between align-center">
            <div className="flex ">
              <img
                width={200}
                src={Logo}
                alt="logo"
              />
            </div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ width: '100%', textAlign: "center" }} />
          </div>
          <Flex horizontal={true} justify="space-between" align="center">
          </Flex>
        </Header>
        <Content style={{ margin: '16px 16px 0' }}>
          <div
            style={{
              padding: 12,
              minHeight: 360
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<h1>Cart</h1>} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            position: 'sticky',
            bottom: 0,
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </BrowserRouter>
  )
}