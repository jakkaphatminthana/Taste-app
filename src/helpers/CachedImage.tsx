import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { ImageSourcePropType } from 'react-native';
import Animated from 'react-native-reanimated';


export const CachedImage: React.FC<any> = (props) => {
    const [cachedSource, setCachedSource] = useState<ImageSourcePropType | null>(null);
    const { uri } = props;

    useEffect(() => {
        const getCachedImage = async () => {
            try {
                const cachedImageData = await AsyncStorage.getItem(uri);
                if (cachedImageData) {
                    setCachedSource({ uri: cachedImageData });
                } else {
                    const response = await fetch(uri);
                    const imageBlob = await response.blob();
                    const base64Data = await new Promise<string>((resolve) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(imageBlob);
                        reader.onloadend = () => {
                            resolve(reader.result as string);
                        };
                    });
                    await AsyncStorage.setItem(uri, base64Data);
                    setCachedSource({ uri: base64Data });
                }
            } catch (error) {
                console.log("Error caching image: ", error);
                setCachedSource({ uri });
            }
        };

        getCachedImage();
    }, [uri]);

    return (cachedSource) ? <Animated.Image source={cachedSource} {...props} /> : null;
};