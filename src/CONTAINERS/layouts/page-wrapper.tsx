import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getUserSession } from '../../SERVICES/user-service';

import { useLocation } from 'react-router-dom';
import { config } from '../../app.config';

import { env } from 'process';
const styles = {
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 60,
  },
  content: {
    flexGrow: 1,
  },
};

export default (props: any) => {
  const redux = useSelector((state: any) => state.redux);
  const user_session: any = getUserSession();
  const location = useLocation();

  return (
    <div id={`page_${props.id}`}>
      <Helmet>
        <title>{props.title}</title>
        <meta name='description' content={`${props.desc}`} />
        <link
          rel='canonical'
          href={`${config.CLIENT_ENDPOINT}${location.pathname}`}
        />
        <meta
          property='og:url'
          content={`${config.CLIENT_ENDPOINT}${location.pathname}`}
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={props.title} />
        <meta property='og:description' content={`${props.desc}`} />
        <meta
          property='og:image'
          content={`${
            props.image
              ? props.image
              : process.env.PUBLIC_URL + '/assets/index/favicon-96x96.png'
          }`}
        />
        <meta property='og:image:alt' content={props.title} />
        <meta property='og:site_name' content={redux.app.title} />
        <meta property='fb:app_id' content='156594362596497' />
        <meta name='twitter:site' content='@xcelearn' />
        <meta
          property='og:url'
          content={`${config.CLIENT_ENDPOINT}${location.pathname}`}
        />
        <meta name='twitter:title' content={props.title} />
        <meta name='twitter:card' content={`${props.desc}`} />
        <meta name='twitter:description' content={`${props.desc}`} />
        <meta
          name='twitter:image'
          content={`${
            props.image
              ? props.image
              : process.env.PUBLIC_URL + '/assets/index/favicon-96x96.png'
          }`}
        />
        <meta name='twitter:image:alt' content={props.title} />
      </Helmet>
      <div style={{ display: 'none' }}>
        <h1>{props.title}</h1>
        <h2>{props.desc}</h2>
      </div>

      {props.children}
    </div>
  );
};
