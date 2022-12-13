//Third Party Imports
import { atom } from "recoil";

//First Party Imports
import { COLORS } from "./Constants";
import { TTheme } from "./Types/TTheme";


export const themeState = atom<TTheme>({
    key: 'theme',
    default: 'device',
});

export const colorState = atom({
    key: 'colors',
    default: COLORS.light,
});

export const initialState = atom({
    key: 'initial',
    default: false,
});

export const questionScreenState = atom({
    key: 'questionScreen',
    default: false,
});


export const progressColorState = atom({
    key: 'progressColor',
    default: "#F8D7DA",
});

export const progressState = atom({
    key: 'progress',
    default: 0,
});
