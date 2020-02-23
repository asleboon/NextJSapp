export type ThemeType = {
    theme: ThemeProps;
};

type ThemeProps = {
    bg: BackgroundProps;
    text: TextProps;
    fontSizes: string[];
    fontWeights: FontWeightProps;
    lineHeights: LineHeightProps;
};

type PartTheme = {
    bg: BackgroundProps;
    text: TextProps;
};

type DefaultPartTheme = {
    fontSizes: string[];
    fontWeights: FontWeightProps;
    lineHeights: LineHeightProps;
};

type BackgroundProps = {
    primary: string;
    secondary: string;
    card: string;
    inset: string;
    input: string;
    code: string;
    button: string;
    button2: string;
    outline: string;
};
type TextProps = {
    primary: string;
    secondary: string;
    tertiary: string;
    quarternary: string;
    placeholder: string;
    onPrimary: string;
};

type FontWeightProps = {
    body: number;
    subHeading: number;
    link: number;
    bold: number;
    heading: number;
};

type LineHeightProps = {
    body: number;
    heading: number;
    code: number;
};

const light: PartTheme = {
    bg: {
        primary: '#eff0f5',
        secondary: '#ffffff',
        inset: '#e2e4e8',
        input: 'rgba(65,67,78,0.12)',
        code: '#33475D',
        button: '#7fffd4',
        button2: '#32feba',
        outline: '#222222',
        card: '#FFFFFF',
    },
    text: {
        primary: '#050505',
        secondary: '#2f3037',
        tertiary: '#525560',
        quarternary: '#9194a1',
        placeholder: 'rgba(82,85,96,0.5)',
        onPrimary: '#ffffff',
    },
};

const dark: PartTheme = {
    bg: {
        primary: '#050505',
        secondary: '#111111',
        inset: '#111111',
        input: 'rgba(191,193,201,0.12)',
        code: '#33475D',
        button: '#ff69b4',
        button2: '#ff2090',
        outline: '#DDDDDD',
        card: '#000000',
    },
    text: {
        primary: '#fbfbfc',
        secondary: '#e3e4e8',
        tertiary: '#a9abb6',
        quarternary: '#6c6f7e',
        placeholder: 'rgba(145,148,161,0.5)',
        onPrimary: '#050505',
    },
};

const lyse: PartTheme = {
    bg: {
        primary: '#4ba529',
        secondary: '#19857b',
        inset: '#111111',
        input: 'rgba(191,193,201,0.12)',
        code: '#33475D',
        button: '#3ba9de',
        button2: '#4eb1e1',
        outline: '#DDDDDD',
        card: '#FFFFFF',
    },
    text: {
        primary: '#050505',
        secondary: '#2f3037',
        tertiary: '#525560',
        quarternary: '#9194a1',
        placeholder: 'rgba(82,85,96,0.5)',
        onPrimary: '#ffffff',
    },
};

const defaultTheme: DefaultPartTheme = {
    fontSizes: [
        '14px', // 0
        '16px', // 1
        '18px', // 2
        '22px', // 3
        '26px', // 4
        '32px', // 5
        '40px', // 6
    ],
    fontWeights: {
        body: 400,
        subHeading: 500,
        link: 600,
        bold: 700,
        heading: 800,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.3,
        code: 1.6,
    },
};

export const lightTheme: ThemeProps = { ...defaultTheme, ...light };
export const darkTheme: ThemeProps = { ...defaultTheme, ...dark };
export const lyseTheme: ThemeProps = { ...defaultTheme, ...lyse };
