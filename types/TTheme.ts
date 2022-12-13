export const TThemeArray = ['dark', 'light', 'device'] as const
export type TTheme = typeof TThemeArray[number]
