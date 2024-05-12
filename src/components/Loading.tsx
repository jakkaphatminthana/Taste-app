import { View, Text, StyleSheet, ActivityIndicator, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';

interface LoadingProps {
    size?: number | "small" | "large" | undefined;
    style?: StyleProp<ViewStyle>;
    className?: string;
}

export default function Loading({
    size = 'large', style, className
}: LoadingProps) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} style={style} className={className} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});