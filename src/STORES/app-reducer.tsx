import { app } from './types';
import { setTheme } from '../SERVICES/user-service';
import { setLanguage, getLanguage } from '../SERVICES/user-service';
import { config } from '../app.config';

const defaultSnackbarMessage: any = {
  open: false,
  message: '',
  type: 'default',
  position: ['bottom', 'left'],
};

const initialState = {
  title: config.TITLE,
  subtitle: config.SUBTITLE,
  description: config.DESCRIPTION,
  client_endpoint: config.CLIENT_ENDPOINT,
  server_endpoint: config.SERVER_ENDPOINT,
  default_language: config.DEFAULT_LANGUAGE,
  keyword: '',
  is_searching: false,
  default_theme: config.DEFAULT_THEME,
  current_grid: null,
  snackbar_message: defaultSnackbarMessage,
  layout_role: 'learner', // learner | instructor | admin
  homepage: '/home-learning',
};

const todos = (state = initialState, action: any) => {
  switch (action.type) {
    case app.CHANGE_THEME:
      state.default_theme = action.theme;
      setTheme(action.theme);
      return { ...state };
    case app.SET_HOMEPAGE:
      state.homepage = action.homepage;
      return { ...state };
    case app.CHANGE_LANGUAGE:
      state.default_language = action.language;
      setLanguage(action.language);
      return { ...state };
    case app.CHANGE_GRID_VIEW:
      state.current_grid = action.grid;
      return { ...state };
    case app.SET_KEYWORD_MAIN_SEARCH:
      state.keyword = action.keyword;
      return { ...state };
    case app.SNACKBAR_MESSAGE:
      state.snackbar_message = { ...defaultSnackbarMessage, ...action.data };
      return { ...state };
    case app.CHANGE_LAYOUT_ROLE:
      state.layout_role = action.layout_role;

      return { ...state };
    default:
      return state;
  }
};
export default todos;
