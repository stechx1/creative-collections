import React from 'react';
import { Layout } from 'antd';
import HomeNav from './HomeNav';
import HomeFooter from './HomeFooter';
import { Outlet, useLocation } from 'react-router-dom';
const { Header, Footer, Content } = Layout;
const HomeLayout = () => {
  const location = useLocation();
  const urlContainsNftMarketplace =
    location.pathname.includes('nftmarketplace');

  const urlContainsGetStarted = location.pathname.includes('getstarted');

  return (
    <Layout>
      <Header
        className='navbar'
        style={{
          zIndex: '2',
          background: urlContainsNftMarketplace
            ? 'white'
            : urlContainsGetStarted
            ? 'black'
            : 'none',
        }}
      >
        <HomeNav urlContainsNftMarketplace={urlContainsNftMarketplace} />
      </Header>
      <Content style={{ backgroundColor: 'white' }}>
        <Outlet />
      </Content>
      <Footer style={{ backgroundColor: 'black' }}>
        <HomeFooter />
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
