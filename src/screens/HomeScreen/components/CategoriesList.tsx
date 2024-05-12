import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from "react-native-reanimated";
import { CachedImage } from "../../../helpers/CachedImage";
import { Category } from '@/domain/foodTypes';
import { COLORS } from '@/theme/theme';

interface CategoriesListProps {
    categories: Category[];
    activeCategory: string;
    handleChangeCategory: (category: string) => void;
}

function CategoriesList({
    categories,
    activeCategory,
    handleChangeCategory,
}: CategoriesListProps
) {
    return (
        <Animated.View entering={FadeInDown.duration(500).springify()}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    categories.map((category, index) => {
                        let isActive: boolean = category.strCategory == activeCategory;
                        let activeButtonClass = isActive
                            ? 'bg-primary'
                            : 'bg-black/10';

                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleChangeCategory(category.strCategory)}
                                className='flex items-center mx-1'
                            >
                                <View className={'rounded-full p-[6px] ' + activeButtonClass}>
                                    <CachedImage
                                        uri={category.strCategoryThumb}
                                        style={{ width: hp(6), height: hp(6), }}
                                        className="rounded-full"
                                    />
                                </View>
                                {/* name food */}
                                <Text style={{ fontSize: hp(1.6) }} className='text-primaryText font-regular'>{category.strCategory}</Text>
                            </TouchableOpacity>
                        );
                    })
                }

            </ScrollView>
        </Animated.View>
    );
};

export default CategoriesList;
