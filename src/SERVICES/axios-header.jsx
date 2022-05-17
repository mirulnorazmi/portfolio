import React from 'react';
import { getUserSession } from './user-service';

export const headerAppFormEncoded = () => {
  return {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
};

export const authHeaderAppFormEncoded = () => {
  // return authorization header with jwt token

  let user = getUserSession();

  if (user && user.token) {
    return {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${user.token}`,
      },
    };
  } else {
    return {};
  }
};

export const headerAppJson = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export const authHeaderAppJson = () => {
  // return authorization header with jwt token

  let user = getUserSession();

  if (user && user.token) {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    };
  } else {
    return {};
  }
};

export const getToken = () => {
  let user = getUserSession();
  if (user && user.token) {
    return user.token;
  } else {
    return {};
  }
};

export const authHeaderFormData = () => {
  // return authorization header with jwt token

  let user = getUserSession();

  if (user && user.token) {
    return {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${user.token}`,
      },
    };
  } else {
    return {};
  }
};
