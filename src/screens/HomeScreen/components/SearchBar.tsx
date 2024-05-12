import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface SearchBarProps {
    placeholder?: string;
    inputSearch: string | undefined;
    setInputSearch: (text: string) => void;
    onSubmit: () => void;
}

export default function SearchBar({
    placeholder = "Search any recipe",
    inputSearch,
    setInputSearch,
    onSubmit,
}: SearchBarProps) {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'gray'}
                style={styles.input}
                value={inputSearch}
                onChangeText={(text) => setInputSearch(text)}
                onSubmitEditing={() => onSubmit()}
            />
            <TouchableOpacity onPress={() => onSubmit()}>
                <View style={styles.bgIcon}>
                    <MagnifyingGlassIcon size={hp(3)} strokeWidth={3} color="gray" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 26,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        padding: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginBottom: 5,
        paddingLeft: 12,
        letterSpacing: 1,
    },
    bgIcon: {
        backgroundColor: 'white',
        borderRadius: 1000,
        padding: 6,
    }
});

