import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Layout from '../../CONTAINERS/layouts/page-wrapper';
import Content from '../../CONTAINERS/layouts/content-wrapper';
import Drawer from '../../CONTAINERS/layouts/drawer/index';
import CardMui from '../../ASSETS/default-preview.jpeg';
import ScrollToTop from './component/scroll-top';

import './index.scss';
import { Divider } from '@material-ui/core';

const HeroSection = lazy(() => import('./component/hero'));
const Skill = lazy(() => import('./component/skill'));
const AboutSection = lazy(() => import('./component/about'));
const ExperienceSection = lazy(() => import('./component/experience'));

export default (props: any) => {
  const { t, i18n }: any = useTranslation();
  const dispatch = useDispatch();
  const redux = useSelector((state: any) => state.redux);
  const socketRef: any = React.useRef();
  // const open = redux.drawer.status;

  return (
    <Layout
      id='homePage'
      title={`${redux.app.title} | Porfolio`}
      desc={`${redux.app.desc}`}
    >
      <Drawer />
      <Content
        className='i-x-center i-wrap'
        id='welcome'>
        <ScrollToTop show={150} />
        <HeroSection index={props} />
        <AboutSection index={props} />
        <Divider style={{ borderColor: '#E5EAF2' }} />
        {/* <Skill index={props} /> */}
        <ExperienceSection />
      </Content>
    </Layout>
  );
};

