import React, { Fragment } from 'react';
import { Button } from 'antd';

import { Container, Row, Col } from 'react-bootstrap';

import HomeDetail from '../assets/homedetail.png';
import { Colors } from '../config/Colors';
const HomeSectionOne = () => {
  return (
    <Fragment>
      <Row style={{ textAlign: 'center' }}>
        <h1
          className='welcometext'
          style={{
            color: Colors.main,
            fontFamily: 'poppinsbold',
            marginBottom: '7px',
          }}
        >
          WELCOME VISIONARY
        </h1>

        <p
          className='welcometext1 mobilehide'
          style={{
            marginBottom: '7px',
          }}
        >
          Cre8tive Collective VR will help power creatives to bring their inner
          world into VR. A full-fledged
        </p>
        <p className='welcometext1 mobilehide'>
          platform for creative artists to{' '}
          <span style={{ color: Colors.main, fontWeight: 'bold' }}>
            learn, earn, explore, exhibit and collaborate.
          </span>
        </p>

        <p
          className='welcometext1 webhide'
          style={{
            marginBottom: '7px',
          }}
        >
          Cre8tive Collective VR will help power creatives to bring their inner
          world into VR. A full-fledged platform for creative artists to{' '}
          <span style={{ color: Colors.main, fontWeight: 'bold' }}>
            learn, earn, explore, exhibit and collaborate.
          </span>
        </p>
      </Row>
      <Row>
        <Col
          xs={{ order: 'last', span: '12' }}
          sm={{ order: 'first', span: '6' }}
          style={{
            padding: '4%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <p
            className='apktext'
            style={{
              color: Colors.main,

              fontWeight: 'bolder',
              letterSpacing: '2px',
              marginBottom: '7px',
            }}
          >
            Install APK
          </p>
          <p
            style={{
              fontSize: '16px',
            }}
          >
            Our first virtual experience is now ready for you to explore! Click
            the download button to test the free beta of Cre8tive Collective VR
            on the Meta Quest 2 and feel free to leave feedback{' '}
            <a
              href='https://forms.wix.com/f/7054840965424480513'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>
          </p>
          <a
            href='https://www.c8cstudio.com/product-page/cre8tive-collective-vr'
            target='_blank'
            rel='noreferrer'
          >
            <Button
              style={{
                height: '50px',
                borderRadius: '25px',
                width: '220px',
                backgroundColor: Colors.main,
                borderColor: Colors.main,
                marginTop: '35px',
              }}
              type='primary'
            >
              Download
            </Button>
          </a>
        </Col>
        <Col
          sm={{ order: 'last', span: '6' }}
          xs={{ order: 'first', span: '12' }}
          style={{ padding: '4%' }}
        >
          <img
            src={HomeDetail}
            width='100%'
            style={{ objectFit: 'contain' }}
            className='homedetailimage'
          ></img>
        </Col>
      </Row>
    </Fragment>
  );
};

export default HomeSectionOne;
