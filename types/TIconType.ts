export const TIconTypeArray = ['antdesign', 'entypo', 'evilicon', 'feather',
    'font-awesome', 'font-awesome-5', 'fontisto', 'foundation', 'ionicon',
    'material', 'material-community', 'octicon', 'simple-line-icon', 'zocial'] as const
export type TIconType = typeof TIconTypeArray[number]
