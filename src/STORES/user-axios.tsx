import React from 'react';
import { config } from '../app.config';
import Axios from 'axios';
import { CANCEL } from 'redux-saga';
import { authHeaderAppJson, headerAppJson } from '../SERVICES/axios-header';
import queryString from 'query-string';
import {
  getErrorMessageFromAxios,
  getErrorRespFromAxios,
} from '../SERVICES/user-service';

export const setUserAccessInfo = (action: any) => {
  return new Promise((resolve, reject) => {
    const params = action.data;

    const url = `${config.SERVER_ENDPOINT}/user/set-access-info`;

    var axiosConfig: any = {
      method: 'post',
      url: url,
      headers: authHeaderAppJson().headers,
      data: params,
    };
    return Axios(axiosConfig)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        throw err;
      });
  });
};

export const getUserInit = (action: any) => {
  return Axios.get(`${config.SERVER_ENDPOINT}/user/details`, {
    ...authHeaderAppJson(),
  })
    .then((resp) => resp.data)
    .catch((err) => {
      const error = getErrorRespFromAxios(err);

      if (error.push_logout) {
        localStorage.removeItem('user');
        window.location.href = '/';
      }

      return error;
    });
};

export const updateUserDetails = (action: any) => {
  return new Promise((resolve, reject) => {
    const params = action.params;

    const url = `${config.SERVER_ENDPOINT}/user/update`;

    var axiosConfig: any = {
      method: 'post',
      url: url,
      headers: headerAppJson().headers,
      data: params,
    };
    return Axios(axiosConfig)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        throw err;
      });
  });
};

export const getUserPermissionList = (action: any) => {
  return Axios.get(`${config.SERVER_ENDPOINT}/user/permissions`, {
    ...authHeaderAppJson(),
  })
    .then((resp) => resp.data)
    .catch((err) => {
      const error = getErrorMessageFromAxios(err);

      if (
        error.trim() == 'Unauthenticated.' ||
        err.message.trim() == 'Request failed with status code 401'
      ) {
        localStorage.removeItem('user');
        window.location.href = '/';
      }

      throw err;
    });
};

export const userLogout = (action: any) => {
  const params = JSON.stringify({
    token: action.token,
  });

  const url = `${config.SERVER_ENDPOINT}/user/logout`;

  var axiosConfig: any = {
    method: 'get',
    url: url,
    headers: authHeaderAppJson().headers,
  };
  return Axios(axiosConfig)
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getSchoolList = (action: any) => {
  return new Promise((resolve, reject) => {
    const params = action.params;

    const url = `${config.SERVER_ENDPOINT}/school/list`;

    var axiosConfig: any = {
      method: 'post',
      url: url,
      headers: headerAppJson().headers,
      data: params,
    };
    return Axios(axiosConfig)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        throw err;
      });
  });
};

export const getStateList = (action: any) => {
  return new Promise((resolve, reject) => {
    // const params = action.params;

    const url = `${config.SERVER_ENDPOINT}/state/list`;

    var axiosConfig: any = {
      method: 'get',
      url: url,
      headers: headerAppJson().headers,
      // data: params,
    };
    return Axios(axiosConfig)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        throw err;
      });
  });
};

export const getVideoList = (action: any) => {
  const source = Axios.CancelToken.source();
  const params = {
    ...action.params,
  };

  const url = `${config.SERVER_ENDPOINT}/video/${
    action.is_login ? 'auth/' : ''
  }list`;

  var axiosConfig: any = {
    method: 'post',
    url: url,
    headers: action.is_login ? authHeaderAppJson().headers : null,
    data: params,
    cancelToken: source.token,
  };
  //  return new Promise((resolve: any, reject: any) => {
  const request: any = Axios(axiosConfig)
    .then((resp) => {
      // resolve(resp.data);
      return resp.data;
    })
    .catch((err) => {
      getErrorMessageFromAxios(err);
      throw err;
    });

  request[CANCEL] = () => source.cancel();
  return request;
  // resolve(request);
  //   });
};

export const getNotificationList = (action: any) => {
  return new Promise((resolve, reject) => {
    const params = action.params;

    const url = `${config.SERVER_ENDPOINT}/user/notification/list`;

    var axiosConfig: any = {
      method: 'get',
      url: url,
      headers: authHeaderAppJson().headers,
      params: params,
    };
    return Axios(axiosConfig)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        throw err;
      });
  });
};

export const updateNotification = (action: any) => {
  return new Promise((resolve, reject) => {
    // const params = action.params;

    const url = `${config.SERVER_ENDPOINT}/user/notification/update/${action.id}`;

    var axiosConfig: any = {
      method: 'put',
      url: url,
      headers: authHeaderAppJson().headers,
      // data: params,
    };
    return Axios(axiosConfig)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        throw err;
      });
  });
};

export const getTotalUnreadNotification = (action: any) => {
  return new Promise((resolve, reject) => {
    // const params = action.params;

    const url = `${config.SERVER_ENDPOINT}/user/notification/total-unread`;

    var axiosConfig: any = {
      method: 'get',
      url: url,
      headers: authHeaderAppJson().headers,
      // data: params,
    };
    return Axios(axiosConfig)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        throw err;
      });
  });
};

export const addFollowing = (action: any) => {
  return new Promise((resolve: any, reject: any) => {
    const params = {
      ...action.params,
    };

    const url = `${config.SERVER_ENDPOINT}/user/follow/add-following/${action.user_id}`;

    var axiosConfig: any = {
      method: 'post',
      url: url,
      headers: authHeaderAppJson().headers,
      data: params,
    };
    return Axios(axiosConfig)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        resolve({ status: false, message: getErrorMessageFromAxios(err) });
        throw err;
      });
  });
};

export const deleteFollowing = (action: any) => {
  return new Promise((resolve: any, reject: any) => {
    const params = {
      ...action.params,
    };

    const url = `${config.SERVER_ENDPOINT}/user/follow/delete-following/${action.user_id}`;

    var axiosConfig: any = {
      method: 'post',
      url: url,
      headers: authHeaderAppJson().headers,
      data: params,
    };
    return Axios(axiosConfig)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        resolve({ status: false, message: getErrorMessageFromAxios(err) });
        throw err;
      });
  });
};
