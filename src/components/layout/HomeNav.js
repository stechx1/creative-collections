import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Row, Col, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Colors } from '../../config/Colors';
import styles from '../../styles/nav.module.css';

const HomeNav = ({ urlContainsNftMarketplace }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <div className={styles.nav}>
        <div>
          <Link>
            <img
              className='navlogo'
              alt='logo'
              height='80px'
              src='/images/logo.png'
            />
          </Link>
        </div>

        <div className={styles.centerNav}>
          <a
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : 'white',
            }}
            href='/'
            rel='noreferrer'
          >
            Home
          </a>
          <a
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : 'white',
            }}
            href='https://c8cstudio-vr.com/c8cstudios'
            target='_blank'
            rel='noreferrer'
          >
            C8C VR (Desktop)
          </a>
          <a
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : 'white',
            }}
            href='https://www.c8cstudio.com/product-page/cre8tive-collective-vr'
            target='_blank'
            rel='noreferrer'
          >
            C8C VR (Meta Quest 2)
          </a>
              <Link
                style={{
                  color: urlContainsNftMarketplace ? Colors?.main : 'white',
                }}
                to='/nftmarketplace'
              >
                Virtual Collections
              </Link>
          <Link
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : 'white',
            }}
            to='/getstarted'
          >
            Get Started
          </Link>
        </div>

        <div className={styles.buttonNav}>
          <a
            className='navlink'
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : 'white',
              fontWeight: '500',
            }}
            href='https://www.c8cstudio.com/plans-pricing'
          >
            Sign Up
          </a>
          <a
            className='navlink'
            href='https://www.c8cstudio.com'
            target='_blank'
            rel='noreferrer'
          >
            <Button
              style={{
                height: '34px',
                borderRadius: '6px',
                width: '110px',
                backgroundColor: Colors.main,
                borderColor: Colors.main,
              }}
              type='primary'
            >
              Log In
            </Button>
          </a>
        </div>
      </div>

      {/* <Row style={{ width: '100%' }} gutter={16}>
        <Col xs={20} sm={19} lg={4} md={20}>
          <Link to='/'>
            <img
              className='navlogo'
              alt='logo'
              height='80px'
              src='/images/logo.png'
            />
          </Link>
        </Col>
        <Col
          style={{ textAlign: 'center' }}
          className='hidemob'
          xs={8}
          sm={5}
          lg={2}
          md={3}
        >
          <a
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : 'white',
            }}
            href='/'
            rel='noreferrer'
          >
            Home
          </a>
        </Col>
        <Col
          style={{ textAlign: 'center' }}
          className='hidemob'
          xs={8}
          sm={5}
          lg={4}
          md={3}
        >
          <a
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : 'white',
            }}
            href='https://c8cstudio-vr.com/c8cstudios'
            target='_blank'
            rel='noreferrer'
          >
            C8C VR (Desktop)
          </a>
        </Col>
        <Col
          style={{ textAlign: 'center' }}
          className='hidemob'
          xs={8}
          sm={5}
          lg={4}
          md={3}
        >
          <a
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : 'white',
            }}
            href='https://www.c8cstudio.com/product-page/cre8tive-collective-vr'
            target='_blank'
            rel='noreferrer'
          >
            C8C VR (Meta Quest 2)
          </a>
        </Col>

        <Col
          style={{ textAlign: 'center' }}
          className='hidemob'
          xs={8}
          sm={5}
          lg={4}
          md={3}
        >
          <Link
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : 'white',
            }}
            to='/getstarted'
          >
            Get Started
          </Link>
        </Col>

        <Col
          style={{ textAlign: 'center' }}
          className='hidemob'
          xs={8}
          sm={5}
          lg={4}
          md={3}
        >
          <Link
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : 'white',
            }}
            to='/nftmarketplace'
          >
            Virtual Collections
          </Link>
        </Col>
        <Col
          style={{ textAlign: 'center' }}
          className='hidemob'
          xs={8}
          sm={4}
          lg={2}
          md={3}
        >
          <a
            className='navlink'
            style={{
              color: urlContainsNftMarketplace ? Colors?.main : 'white',
              fontWeight: '500',
            }}
            href='https://www.c8cstudio.com/plans-pricing'
          >
            Sign Up
          </a>

        </Col>
        <Col
          style={{ textAlign: 'center' }}
          className='hidemob'
          xs={8}
          sm={4}
          lg={2}
          md={3}
        >
          <a
            className='navlink'
            href='https://www.c8cstudio.com'
            target='_blank'
            rel='noreferrer'
          >
            <Button
              style={{
                height: '34px',
                borderRadius: '6px',
                width: '110px',
                backgroundColor: Colors.main,
                borderColor: Colors.main,
              }}
              type='primary'
            >
              Log In
            </Button>
          </a>
        </Col>

        <Col className='hideweb' xs={4} sm={4} lg={2} md={3}>
          <Button
            style={{
              height: '34px',
              borderRadius: '6px',
              backgroundColor: Colors.main,
              borderColor: Colors.main,
            }}
            type='primary'
            onClick={showDrawer}
          >
            <MenuOutlined />
          </Button>
        </Col>
      </Row> */}
        <Col className='hideweb' xs={4} sm={4} lg={2} md={3}>
          <Button
            style={{
              height: '34px',
              borderRadius: '6px',
              backgroundColor: Colors.main,
              borderColor: Colors.main,
            }}
            type='primary'
            onClick={showDrawer}
          >
            <MenuOutlined />
          </Button>
        </Col>
      <Drawer title='C8cstudio' placement='right' onClose={onClose} open={open}>
        <div>
          <a
            className='navlink'
            style={{ color: 'black', fontWeight: '500' }}
            href='/'
            rel='noreferrer'
          >
            Home
          </a>{' '}
        </div>
        <br />
        <a
          className='navlink'
          style={{ color: 'black', fontWeight: '500' }}
          href='https://www.c8cstudio.com/plans-pricing'
          target='_blank'
          rel='noreferrer'
        >
          Signup
        </a>
        <br />
        <a
          className='navlink'
          href='https://www.c8cstudio.com'
          target='_blank'
          style={{
            color: 'black',
            fontWeight: '500',
            display: 'inline-block',
            marginTop: '20px',
          }}
          rel='noreferrer'
        >
          Login
        </a>
        <br />
        <a
          className='navlink'
          href='https://www.c8cstudio.com/product-page/cre8tive-collective-vr'
          target='_blank'
          style={{
            color: 'black',
            fontWeight: '500',
            display: 'inline-block',
            marginTop: '20px',
          }}
          rel='noreferrer'
        >
          C8C VR (Meta Quest 2)
        </a>
        <br />
        <a
          className='navlink'
          href='https://c8cstudio-vr.com/c8cstudios'
          target='_blank'
          style={{
            color: 'black',
            fontWeight: '500',
            display: 'inline-block',
            marginTop: '20px',
          }}
          rel='noreferrer'
        >
          C8C VR (Desktop)
        </a>
        <br />
        <Link
          style={{
            color: 'black',
            fontWeight: '500',
            display: 'inline-block',
            marginTop: '20px',
          }}
          to='/nftmarketplace'
        >
          Virtual Collections
        </Link>
        <br/>
        <Link
          style={{
            color: 'black',
            fontWeight: '500',
            display: 'inline-block',
            marginTop: '20px',
          }}
          to='/getstarted'
        >
          Get Started
        </Link>
      </Drawer>
    </Fragment>
  );
};

export default HomeNav;
