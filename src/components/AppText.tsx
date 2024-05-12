import { COLORS, FONTWEIGHT } from '@/theme/theme';
import * as React from 'react';
import { Text, View, StyleSheet, TextStyle } from 'react-native';
import tw from 'twrnc';

interface AppTextProps {
    text: string;
    fontSize?: number;
    color?: string;
    fontWeight?: string;
    style?: TextStyle;
    className?: string;
}

//resolve fontWeight broken
type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';


function AppText({
    text,
    fontSize = 16,
    color = COLORS.primaryTextColor,
    fontWeight = FONTWEIGHT.regular,
    style,
    className,
}: AppTextProps
) {
    const styles = StyleSheet.create({
        textStyle: {
            fontSize: fontSize,
            color: color,
            fontWeight: fontWeight as FontWeight,
        }
    });

    return (
        <Text style={styles.textStyle} className={`c`}>
            {text}
        </Text>
    );
};


export default AppText;