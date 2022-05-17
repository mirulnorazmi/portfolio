import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import './index.css';
import App from './CONTAINERS/App';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './STORES/index';
import { createBrowserHistory } from 'history';
import reportWebVitals from './reportWebVitals';
// import {
//   GoogleReCaptchaProvider,
//   useGoogleReCaptcha,
// } from 'react-google-recaptcha-v3';
import { config } from './app.config';
export const history = createBrowserHistory();
const store = configureStore(history);

const rootElement: any = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    rootElement
  );
} else {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {/* <GoogleReCaptchaProvider
          scriptProps={{ async: true }}
          reCaptchaKey={config.GOOGLE_RECAPTCHA_3_SITE_KEY}
        > */}
        <App />
        {/* </GoogleReCaptchaProvider> */}
      </ConnectedRouter>
    </Provider>,
    rootElement
  );
}
// ReactDOM.render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             {/* <React.StrictMode> */}
//             <App />
//             {/* </React.StrictMode> */}
//         </ConnectedRouter>
//     </Provider>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
