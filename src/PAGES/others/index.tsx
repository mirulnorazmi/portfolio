import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Layout from '../../CONTAINERS/layouts/page-wrapper';
import Content from '../../CONTAINERS/layouts/content-wrapper';
import './index.scss';



export default (props: any) => {
  const { t, i18n }: any = useTranslation();
  const dispatch = useDispatch();
  const redux = useSelector((state: any) => state.redux);
  const socketRef: any = React.useRef();
  // const open = redux.drawer.status;

  return (
    <Layout
      id='others'
      title={`Others | ${redux.app.title}`}
      desc={`hello world...`}
    >
      <Content
        className='i-x-center i-wrap'
        id='welcome'>
        
      </Content>
    </Layout>
  );
};

