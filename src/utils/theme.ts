// export default theme;

import {DefaultTheme} from '@react-navigation/native';

const LightTheme = {
  ...DefaultTheme,
  isDark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    background: 'white',
    backgroundLight: '#323234',
    card: '#f3f3f3',
    text: 'black',
    border: 'black',
    notification: 'rgba(255, 157, 157, 1)',
    focus: 'rgba(255, 157, 157, 1)',
    muted: 'rgba(255, 255, 255, 0.6)',
    success: 'rgba(52, 168, 83, 1)',
  },
};

const DarkTheme = {
  ...DefaultTheme,
  isDark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#BB86FC',
    background: '#1C1C1E',
    backgroundLight: '#323234',
    card: '#1E1E1E',
    text: 'rgba(255, 255, 255, 1)',
    border: 'white',
    notification: 'rgba(255, 157, 157, 1)',
    focus: 'rgba(255, 157, 157, 1)',
    muted: 'rgba(255, 255, 255, 0.6)',
    success: 'rgba(52, 168, 83, 1)',
  },
};

export default {LightTheme, DarkTheme};
