interface Color {
    primaryColor: string;
    darkColor: string;
    lightColor: string;
    primaryTextColor: string;
    black: string;
    white: string;
    white20: string;
    white40: string;
    white60: string;
};

export const COLORS: Color = {
    primaryColor: '#FF8C32',
    darkColor: '#06113C',
    lightColor: '#EEEEEE',
    primaryTextColor: '#515350',
    black: '#000000',
    white: '#FFFFFF',
    white20: 'rgba(255, 255, 255, 0.2)',
    white40: 'rgba(255, 255, 255, 0.4)',
    white60: 'rgba(255, 255, 255, 0.6)',
};

interface FontWeight {
    regular: string;
    medium: string;
    bold: string;
};

export const FONTWEIGHT: FontWeight = {
    regular: "500",
    medium: "600",
    bold: "800",
}