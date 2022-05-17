import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { History } from 'history';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import app from './app-reducer';
// import drawer from './drawer-reducer';
// import user from './user-reducer';
// import classroom from '../PAGES/my-classroom/store/reducer';
// import library from '../PAGES/library/store/reducer';
// import myVideos from '../PAGES_INSTRUCTOR/studio/store/reducer';
// import myDocuments from '../PAGES_INSTRUCTOR/my-documents/store/reducer';
// import myExternalResources from '../PAGES_INSTRUCTOR/my-external-resources/store/reducer';
// import watch from '../PAGES/video-watch/store/reducer';
// import read from '../PAGES/document-read/store/reducer';
// import view from '../PAGES/external-resource_view/store/reducer';
//import answer from '../PAGES/question-answer/store/reducer';
// import general_data from './general-data-reducer';

// import rootSaga from './root-sagas';

const createRootReducer = (history: History) =>
  combineReducers({
    redux: combineReducers({
      app,
      // drawer,
      // user,

      // data: general_data,
      // modules: combineReducers({
      //   classroom,
      //   library,
      //   watch,
      //   read,
      //   view,
      //   my_videos: myVideos,
      //   my_documents: myDocuments,
      //   my_external_resources: myExternalResources,
      // }),
    }),
    router: connectRouter(history),
  });

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

export default function configureStore(history: History) {
  //Init middlewares
  const middlewares = [routerMiddleware(history), sagaMiddleware];

  //Init enhancer
  const enhancer = compose(applyMiddleware(...middlewares));

  //Store creation
  const store = createStore(createRootReducer(history), enhancer);
  // sagaMiddleware.run(rootSaga);
  return store;
}
