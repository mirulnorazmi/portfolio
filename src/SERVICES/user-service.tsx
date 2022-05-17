import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../app.config';
import Axios from 'axios';
import { authHeaderAppJson } from '../SERVICES/axios-header';

export const setUserSession = (data: any) => {
  localStorage.setItem('user', JSON.stringify(data));
};

export const getUserSession = () => {
  if (localStorage.getItem('user')) {
    const data: any = localStorage.getItem('user');
    return JSON.parse(data);
  }
  return null; //if token not available on localstorage
};

export const checkUserSession = () => {
  if (localStorage.getItem('user')) {
    return true;
  }
  return false;
};

export const setLanguage = (lang: string) => {
  //lang = en or my
  localStorage.setItem('language', lang);
};

export const getLanguage = () => {
  if (localStorage.getItem('language')) {
    return localStorage.getItem('language');
  }
  return config.DEFAULT_LANGUAGE; //default lang for e-commerce
};

export const setCartList = (data: any) => {
  localStorage.setItem('cart_list', JSON.stringify(data));
};

export const getCartList = () => {
  if (localStorage.getItem('cart_list')) {
    const data: any = localStorage.getItem('cart_list');
    return JSON.parse(data);
  }
  return {};
};

export const setVideoSearchHistory = (data: any) => {
  localStorage.setItem('video_search', JSON.stringify(data));
};

export const getVideoSearchHistory = () => {
  if (localStorage.getItem('video_search')) {
    const data: any = localStorage.getItem('video_search');
    return JSON.parse(data);
  }
  return [];
};

export const setMainSearchHistory = (data: any) => {
  localStorage.setItem('main_search', JSON.stringify(data));
};

export const getMainSearchHistory = () => {
  if (localStorage.getItem('main_search')) {
    const data: any = localStorage.getItem('main_search');
    return JSON.parse(data);
  }
  return [];
};

export const setTheme = (theme: string) => {
  //theme = light or dark
  localStorage.setItem('theme', theme);
};

export const getTheme = () => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  return config.DEFAULT_THEME; //light or dark
};

export const getErrorMessageFromAxios = (err: any) => {
  if (err.response?.data) {
    let message = err.response.data.message;
    let error = null;

    error = err.response?.data?.error;

    if (!error) {
      error = err.response?.data?.errors;
    }
    if (!error) {
      error = '';
    }
    return `${message} ${error != '' ? ',' + error : ''}`;
  } else {
    return ``;
  }
};

export const getErrorRespFromAxios = (err: any) => {
  if (err.response?.data) {
    let data = err.response.data;

    return data;
  } else {
    return {};
  }
};

export const setLearningProgress = (data: any) => {
  if (localStorage.getItem('learning_progress')) {
    const existingData: any = localStorage.getItem('learning_progress');
    const newData = { ...JSON.parse(existingData), ...data };
    if (Object.keys(newData).length == 11) {
      let count = 0;
      for (const x in Object.keys(newData)) {
        count++;
        if (count == 1) {
          const key = Object.keys(newData)[x];
          delete newData[key];
          break;
        }
      }
    }

    return localStorage.setItem('learning_progress', JSON.stringify(newData));
  } else {
    return localStorage.setItem('learning_progress', JSON.stringify(data));
  }
};

export const getLearningProgress = (contentId: any) => {
  if (localStorage.getItem('learning_progress')) {
    const existingData: any = localStorage.getItem('learning_progress');
    const getData: any = JSON.parse(existingData);
    if (getData[contentId]) {
      return getData[contentId];
    } else {
      return null;
    }
  }
  return null;
};

export const setCurrentLocation = (location: any) => {
  localStorage.setItem('geolocation', JSON.stringify(location));
};

export const getCurrentLocation = () => {
  if (localStorage.getItem('geolocation')) {
    return localStorage.getItem('geolocation');
  }
  return null;
};
