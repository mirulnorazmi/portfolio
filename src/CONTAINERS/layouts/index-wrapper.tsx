import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { app, user } from '../../STORES/types';
import {
  getTheme,
  getLanguage,
  getUserSession,
  setCurrentLocation,
  getCurrentLocation,
} from '../../SERVICES/user-service';
import WithWidthRendering from './with-width-rendering';
import SnackbarMessage from './snackbar-message';
// import DeviceDetect from './device-detect';
import { useLocation, useParams } from 'react-router-dom';
import { config } from '../../app.config';
// import { io as socketIOClient } from 'socket.io-client';
// import 'lazysizes';
// import { push } from 'connected-react-router';
// import a plugin
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import LoadingSpinner from '../../COMPONENTS/loading-spinnar';
// import { sendRequest as socketSendRequest } from '../../COMPONENTS/socket-utils';
import { setUserAccessInfo } from '../../STORES/user-axios';
import * as ELG from 'esri-leaflet-geocoder';
import { Button } from '@material-ui/core';

// const ModalIsNotComplete = lazy(() => import('../modal-setup-account/index'));
// const ModalFollowUser = lazy(() => import('../modal-follow-user/index'));
const user_session: any = getUserSession();

const InitialRendering = (props: any) => {
  const params: any = useParams();
  const dispatch = useDispatch();
  const redux = useSelector((state: any) => state.redux);
  const [isIncomplete, setIsIncomplete] = React.useState(false);
  const socketRef: any = React.useRef();
  // React.useEffect(() => {
  //   const userSocket: any = socketIOClient(config.SERVER_SOCKET_ENDPOINT, {
  //     transports: ['websocket'],
  //   });
  //   socketRef.current = userSocket;
  // }, []);
  const userLogin = redux.user?.user;
  // React.useEffect(() => {
  //   if (userLogin.is_loading == false && userLogin.id) {
  //     if (socketRef.current) {
  //       sendRequest('get_user_info', {
  //         userInfo: {
  //           name: userLogin.full_name,
  //           id: userLogin.id,
  //         },
  //       });
  //     }
  //     if (
  //       userLogin.no_password ||
  //       !userLogin.gender ||
  //       !userLogin.role ||
  //       !userLogin.birthdate ||
  //       userLogin.personalized?.subjects?.length == 0
  //     ) {
  //       setIsIncomplete(true);
  //     } else {
  //       getLocation();
  //     }
  //   }
  // }, [userLogin.is_loading, isIncomplete]);

  const handleCloseModalIsComplete = () => {
    setIsIncomplete(false);
  };

  const getLocation = async () => {
    if (!getCurrentLocation()) {
      if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
        await setUserAccessInfo({
          data: {},
        });
      } else {
        console.log('Locating...');
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCurrentLocation({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            });

            const Geo: any = ELG;

            const geocoder = Geo.geocodeService({
              apikey:
                'AAPKc27a9086d6f0474d9d138275d3b48ae3PvTwMotTDJLZWB8SqkB3rPnab_6vRqyM82nKE_GWYOAgVcUh_h35NCvzTAMHdKMn',
            });
            geocoder
              .reverse()

              .latlng([position.coords.latitude, position.coords.longitude])
              .run(async function (error: any, result: any, response: any) {
                const address = result.address;

                await setUserAccessInfo({
                  data: {
                    geolocation: `${position.coords.latitude}, ${position.coords.longitude}`,
                    address: address,
                  },
                });
              });
          },
          async () => {
            console.log('Unable to retrieve your location');
            await setUserAccessInfo({
              data: {},
            });
          }
        );
      }
    }
  };

  // const sendRequest: any = async (type: any, data: any) => {
  //   return await socketSendRequest(socketRef.current, type, data);
  // };

  React.useEffect(() => {
    const theme: any = getTheme();
    const language: any = getLanguage();

    dispatch({
      type: app.CHANGE_THEME,
      theme: theme,
    });
    dispatch({
      type: app.CHANGE_LANGUAGE,
      language: language,
    });

    if (user_session?.token) {
      dispatch({
        type: user.USER_INIT,
      });
      dispatch({
        type: user.USER_LOGIN_STATUS,
        is_login: true,
      });
    } else {
      dispatch({
        type: user.USER_INIT_ASYNC,
        data: {
          is_loading: false,
          id: 0,
          avatar: null,
          email: `${language == 'my' ? 'pelawat' : 'guest'}@gmail.com`,
          first_name: `${language == 'my' ? 'Pelawat' : 'Guest'}`,
          last_name: `${language == 'my' ? 'Pelawat' : 'Guest'}`,
          bio: null,
          role: null,
        },
      });
    }
  }, []);

  const userActive = redux.user?.user;
  // React.useEffect(() => {
  //   if (userActive.is_loading == false && userActive.id && userActive.role) {
  //     dispatch({
  //       type: user.USER_PERMISSIONS,
  //     });
  //   }
  // }, [userActive.is_loading]);

  // React.useEffect(() => {
  //   if (userActive.is_loading == false) {
  //     let homepage = `/dashboard-teacher`;
  //     if (userActive.homepage == 1) {
  //       homepage = `/dashboard-teacher`;
  //     }

  //     if (userActive.homepage == 2) {
  //       homepage = `/home-learning`;
  //     }
  //     if (userActive.homepage == 3) {
  //       homepage = `/dashboard-parent`;
  //     }
  //     dispatch({
  //       type: app.SET_HOMEPAGE,
  //       homepage: homepage,
  //     });
  //   }
  // }, [userActive.is_loading]);

  return (
    <div>
      {isIncomplete ? (
        <Suspense
          fallback={
            <div className='loading-wrapper'>
              Loading{' '}
              <h3 style={{ marginLeft: '10px' }}>Loading...</h3>
            </div>
          }
        >
          {/* <ModalIsNotComplete handleCloseModal={handleCloseModalIsComplete} /> */}
        </Suspense>
      ) : null}
    </div>
  );
};

// const ComModalFollowUser = (props: any) => {
//   const params: any = useParams();
//   const dispatch = useDispatch();
//   const redux = useSelector((state: any) => state.redux);

//   const followUser = redux.user.modal_follow_user;

//   return (
//     <div>
//       {followUser.is_open ? (
//         <Suspense
//           fallback={
//             <div className='loading-wrapper'>
//               {/* <LoadingSpinner />{' '} */}
//               Loading{' '}
//               <h3 style={{ marginLeft: '10px' }}>Loading...</h3>
//             </div>
//           }
//         >
//           <ModalFollowUser />
//         </Suspense>
//       ) : null}
//     </div>
//   );
// };

const MainLayout = (props: any) => {
  const redux = useSelector((state: any) => state.redux);
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div
      className={`app-view--wrapper ${redux.app.current_grid} ${redux.app.default_theme} ${redux.app.layout_role}`}
    >
      {/* <DeviceDetect /> */}
      <WithWidthRendering />
      <InitialRendering />
      <SnackbarMessage />
      {/* <ComModalFollowUser /> */}

      {/* <Helmet>
                <title>{redux.app.title}</title>
                <link
                    rel='canonical'
                    href={`${config.CLIENT_ENDPOINT}${location.pathname}`}
                />
                <meta charSet='utf-8' />
                <meta name='description' content={redux.app.description} />
            </Helmet> */}

      {props.children}
    </div>
  );
};

export default MainLayout;
