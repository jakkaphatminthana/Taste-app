import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { COLORS } from '@/theme/theme';
import { StatusBar } from 'expo-status-bar';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    //animation
    const ring1Padding = useSharedValue(0);
    const ring2Padding = useSharedValue(0);

    //initState
    useEffect(() => {
        ring1Padding.value = 0;
        ring2Padding.value = 0;

        //add padding 5%, delay 100
        setTimeout(() => ring1Padding.value = withSpring(ring1Padding.value + hp(5)), 100);
        //add padding 5.5%, delay 300
        setTimeout(() => ring2Padding.value = withSpring(ring2Padding.value + hp(5.5)), 300);

        //navigate to HomeScreen, delay 2500
        setTimeout(() => navigation.navigate('HomeScreen' as never), 2500);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style='light' />

            {/* logo image with rings */}
            <Animated.View className="bg-white/20 rounded-full" style={{padding: ring1Padding}}>
                <Animated.View className="bg-white/20 rounded-full" style={{padding: ring2Padding}}>
                    <Image
                        source={require('../../assets/images/bibimbap.png')}
                        style={{ width: hp(20), height: hp(20), }}
                    />
                </Animated.View>
            </Animated.View>

            {/* title and punch line */}
            <View style={styles.containerText}>
                <Text style={styles.title}>Taste</Text>
                <Text style={styles.subtitle}>Food is always right</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical: 10,
        backgroundColor: COLORS.primaryColor,
    },
    containerText: {
        paddingVertical: 26,
        alignItems: 'center',
    },
    title: {
        fontSize: hp(7),
        fontWeight: '800',
        color: COLORS.lightColor,
        letterSpacing: 2,
    },
    subtitle: {
        fontSize: hp(2),
        fontWeight: '500',
        color: COLORS.lightColor,
        letterSpacing: 2,
    },
});

export default WelcomeScreen;
