import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Layout from '../../CONTAINERS/layouts/page-wrapper';
import Content from '../../CONTAINERS/layouts/content-wrapper';
import Drawer from '../../CONTAINERS/layouts/drawer/index';

import './index.scss';

const HeroSection = lazy(() => import('./component/hero'));

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
        <HeroSection index={props} />
      </Content>
    </Layout>
  );
};

