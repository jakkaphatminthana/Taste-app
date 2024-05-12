import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface MiscProps {
    children: React.ReactNode;
    value?: string;
    unit?: string;
}

const Misc = ({ children, value, unit }: MiscProps) => {
    return (
        <View className='flex rounded-full bg-primary p-2'>
            <View
                style={{ height: hp(6.5), width: hp(6.5) }}
                className='bg-white rounded-full flex items-center justify-center'
            >
                {children}
            </View>

            <View className='flex items-center py-2 space-y-1'>
                <Text style={{ fontSize: hp(2) }} className='font-bold text-dark'>
                    {value}
                </Text>
                <Text style={{ fontSize: hp(1.4) }} className='font-bold text-dark'>
                    {unit}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default Misc;
