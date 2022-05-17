import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../CONTAINERS/layouts/page-wrapper';
import './index.scss';

const PageNotFound = () => {
    const redux = useSelector((state: any) => state.redux);
    return (
        <Layout
            id='pageNotFound'
            title={`Page not found | ${redux.app.title}`}
            desc={`Page not found || 404 `}
        >
            <div className='i-x-center'>
                <div className='mainbox '>
                    <div className='i-x-center'>
                        <div className='err'>404</div>
                    </div>

                    <div className='i-x-center'>
                        <div className='msg d-50 t-50 m-90'>
                            Maybe this page moved? Got deleted? Is hiding out in
                            quarantine? Never existed in the first place?
                            <p>
                                Let's go <Link to='/'>home</Link> and try from
                                there.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PageNotFound;
