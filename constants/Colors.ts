/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#fff';
const tintColorDark = 'orange';

export const Colors = {
  dark: {
    text: '#fff',
    background: '#000',
    headerBackground: 'rgb(87, 8, 8)',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorDark,
  },
  light: {
    text: '#fff',
    background: '#151718',
    headerBackground: 'rgb(1,1,1)',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#c68e17',
    tabIconSelected: tintColorLight,
  },
};
