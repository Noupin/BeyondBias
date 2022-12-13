//Third Party Imports
import { Colors } from 'react-native/Libraries/NewAppScreen';

//First Party Imports
import { IColors } from './interfaces/IColors';
import { IIcon } from './interfaces/IIcon';
import { TThemeArray } from './types/TTheme';
import { threeHexToSixHex } from './helpers/Colors';


//Colors & Themes
const lightPlaceholder = `${threeHexToSixHex(Colors.darker as string)}70`
const darkPlaceholder = `${threeHexToSixHex(Colors.lighter as string)}70`

export const COLORS: IColors = {
    light: {
        background: "#ECECEC",
        text: "#1F1F1F",
        statusBar: 'dark-content',
        placeholderText: lightPlaceholder,
        textInputBackground: '#00000010',
        button: '#0D6EFD',
        overlay: '#FFFFFFB0',
        redL: "#f8d7da",
        yellowL: "#fff3cd",
        greenL: "#d4edda",
        redD: "#721c25",
        yellowD: "#856404",
        greenD: "#155724"
    },
    dark: {
        background: "#1F1F1F",
        text: "#ECECEC",
        statusBar: 'light-content',
        placeholderText: darkPlaceholder,
        textInputBackground: '#FFFFFF10',
        button: '#0D6EFD',
        overlay: '#000000B0',
        redL: "#721c25",
        yellowL: "#856404",
        greenL: "#155724",
        redD: "#f8d7da",
        yellowD: "#fff3cd",
        greenD: "#d4edda"
    }
}

export const NEXT_THEME = {
    light: TThemeArray[0],
    dark: TThemeArray[2],
    device: TThemeArray[1]
}

export const THEME_ICON = {
    light: 'light-up',
    dark: 'moon',
    device: 'phone-portrait-outline',
}

export const THEME_ICON_TYPE = {
    light: 'entypo',
    dark: 'entypo',
    device: 'ionicon',
}

export const SETTINGS_ICON = {
    type: 'ionicon',
    name: 'ios-cog'
}

export const THEME_COLORS = {
    light: '#DF711B',
    dark: '#995edb',
}

export const BACK_ICON: IIcon = {
    name: 'ios-chevron-back-outline',
    type: 'ionicon',
}

export const LINK_COLORS = {
    dormant: {
        color: '#1DBCFF',
        transparent: '#1DBCFF20',
        name: 'link',
        type: 'entypo',
    },
    success: {
        color: '#0DEF9B',
        transparent: '#0DEF9B20',
        name: 'link-2',
        type: 'feather',
    },
    error: {
        color: '#FF1D37',
        transparent: '#FF1D3720',
        name: 'unlink',
        type: 'foundation',
    },
}


export const RADIUS_SIZE = 25;
export const TOP_BAR_SIZE = 50;


//Haptics
export const HAPTIC_OPTIONS = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
};


export const questions = [
    "What did the black woman named Mary Van Brittan Brown invent?",
    "Peanut butter was invented by some white guy on his way to the gym?",
    "Black people get jobs that white people don’t just because they are black?",
    "Black people are not qualified to work which job(s)?",
    "All ___ people are better at football.",
    "Black people have had it just as easy as white people since slavery ended, if not easier because of affirmative action.",
    "Complete the statement: Affirmative action...",
    "Hand towel dispensers work the same amount for black people and white people.",
    "What ended with slavery?",
    "Do you think it is okay to avoid black people because it will make you feel safer?",
    "Saying the \"N\" word is okay.",
    "It is more likely for a black person to have a harder time with the police at a traffic stop than a white person.",
    "Black people have had a harder time in life than white people.",
    "It is okay to touch a black person's hair because you've never seen something like that before.",
    "The invention of the mailbox and the automatic elevator was made by white people.",
    "Black people are known to play what sport?",
    "Police need to watch black people more carefully because they are known to live in higher crime areas?",
    "What is the highest degree a black person has gotten?",
    "It is okay to follow a black person through a store to make sure they are not doing anything suspicious.",
    "Black people are at a disadvantage compared to white people for attaining higher education.",
]

export const answers = [
    ["Wooden flooring", "Home Security System", "Single ply toilet paper", "Aluminum cans"],
    ["True", "False"],
    ["True", "False"],
    ["Accountant", "Garbage Collector", "None of the answers", "CEO"],
    ["Black", "Asian", "White", "None of the above"],
    ["True", "False"],
    ["makes life harder for white men", "attempts to even out discrimination", "makes job searching harder for white men", "is non-contentious"],
    ["True", "False"],
    ["Racism", "Discrimination", "White people treating black people as different than them", "None of the above"],
    ["Of course, I just want to feel protected anyway I can", "Only if I'm alone", "No way", "Only sometimes"],
    ["It is never okay to say it", "Only if it is sung in a song", "If my friends ask/tell me to say it", "Only if you're alone, with no one to hear"],
    ["True", "False"],
    ["No, everyone equally has the same struggle", "Yes, they have had more struggles", "Not in every case", "Only sometimes"],
    ["True", "False"],
    ["True", "False"],
    ["Basketball", "Soccer", "Tennis", "All of the above"],
    ["True", "False"],
    ["Highschool", "Associate's", "Bachelor's", "Doctoral"],
    ["True", "False"],
    ["True", "False"],
]

export const corrects = [
    1,
    1,
    1,
    2,
    3,
    0,
    1,
    1,
    3,
    2,
    0,
    0,
    1,
    1,
    1,
    3,
    1,
    3,
    1,
    0
]