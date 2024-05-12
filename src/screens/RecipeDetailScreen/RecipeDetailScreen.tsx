import { Recipe, RecipeDetail } from '@/domain/foodTypes';
import { CachedImage } from '@/helpers/CachedImage';
import { AppScreenProps } from '@/navigation/types';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronLeftIcon, ClockIcon } from 'react-native-heroicons/outline';
import { HeartIcon, Square3Stack3DIcon, UsersIcon } from 'react-native-heroicons/solid';
import { FireIcon } from 'react-native-heroicons/outline';
import { COLORS } from '@/theme/theme';
import { useRecipeDetail } from '@/domain/useCase/useRecipeDetail';
import Loading from '@/components/Loading';
import Misc from './components/Misc';
import YoutubeIframe from 'react-native-youtube-iframe';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

const RecipeDetailScreen = ({ navigation, route }: AppScreenProps<'RecipeDetailScreen'>) => {
  let item = route.params.item;
  const [isFavourite, setIsFavourite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const detail = useRecipeDetail(item.idMeal);
  // console.log('🟠 detail: ', detail);
  // console.log('data: ', detail?.idMeal);

  function _ingredientsIndexes(meals: RecipeDetail | undefined): number[] {
    if (!meals) return [];

    let indexes: number[] = [];
    for (let i = 1; i <= 10; i++) {
      if (meals[`strIngredient${i}` as keyof RecipeDetail]) {
        indexes.push(i);
      }
    }
    return indexes;
  }

  function _getYoutubeVideoId(url: string): string | undefined {
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return undefined;
  }

  useEffect(() => {
    if (detail && detail != undefined) {
      setIsLoading(false);
    }
  }, [detail]);

  return (
    <ScrollView
      className='bg-white flex-1'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style={'light'} />
      {/* image */}
      <View className='flex-row justify-center'>
        <Image
          source={{ uri: item.strMealThumb }}
          style={styles.image}

        />
        {/* <CachedImage
          uri={item.strMealThumb}
          style={styles.image}
        /> */}
      </View>

      {/* Back button */}
      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className='w-full absolute flex-row justify-between items-center pt-14'
      >
        <TouchableOpacity
          className='p-2 rounded-full ml-5 bg-white'
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color={COLORS.primaryColor} />
        </TouchableOpacity>

        {/* Favourite Icon*/}
        <TouchableOpacity
          className='p-2 rounded-full mr-5 bg-white'
          onPress={() => setIsFavourite(!isFavourite)}
        >
          <HeartIcon
            size={hp(3.5)}
            strokeWidth={4.5}
            color={isFavourite ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      </Animated.View>

      {/* meal description */}
      {
        (isLoading)
          ? <Loading size={'large'} className="mt-16" />
          : (
            <View className='px-4 flex justify-between spcae-y-4 pt-8'>
              {/* name and area */}
              <Animated.View
                entering={FadeInDown.duration(700).springify().damping(12)}
                className='space-y-2 pb-4'
              >
                <Text style={{ fontSize: hp(3) }} className='font-bold text-primaryText flex-1'>
                  {detail?.strMeal}
                </Text>
                <Text style={{ fontSize: hp(2) }} className='font-medium text-primaryText/70 flex-1'>
                  {detail?.strArea}
                </Text>
              </Animated.View>

              {/* misc */}
              <Animated.View
                entering={FadeInDown.delay(100).duration(700).springify().damping(12)}
                className='flex-row justify-around'
              >
                <Misc value={(detail?.time ?? 0).toString()} unit='Mins'>
                  <ClockIcon size={hp(4)} strokeWidth={2.5} color={COLORS.darkColor} />
                </Misc>
                <Misc value={(detail?.servings ?? 0).toString().padStart(2, '0')} unit='Servings'>
                  <UsersIcon size={hp(4)} strokeWidth={2.5} color={COLORS.darkColor} />
                </Misc>
                <Misc value={(detail?.cals ?? 0).toString()} unit='Cals'>
                  <FireIcon size={hp(4)} strokeWidth={2.5} color={COLORS.darkColor} />
                </Misc>
                <Misc value={(detail?.difficulty ?? '-')}>
                  <Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color={COLORS.darkColor} />
                </Misc>
              </Animated.View>

              {/* ingredients */}
              <Animated.View
                entering={FadeInDown.delay(200).duration(700).springify().damping(12)}
                className='py-4'
              >
                <Text
                  style={{ fontSize: hp(2.5) }}
                  className='font-bold text-primaryText flex-1'
                >
                  Ingredients
                </Text>
                <View className='space-y-2 ml-3 pt-2'>
                  {
                    (detail) &&
                    _ingredientsIndexes(detail).map((i) => {
                      return (
                        <View key={i} className='flex-row space-x-4 items-center'>
                          <View
                            style={{ height: hp(1.5), width: hp(1.5) }}
                            className='bg-primary rounded-full'
                          />
                          <View className='flex-row space-x-2'>
                            <Text style={{ fontSize: hp(1.7) }} className='font-bold text-primaryText'>
                              {detail[`strMeasure${i}` as keyof RecipeDetail]}
                            </Text>
                            <Text style={{ fontSize: hp(1.7) }} className='font-regular text-primaryText/90'>
                              {detail[`strIngredient${i}` as keyof RecipeDetail]}
                            </Text>
                          </View>
                        </View>
                      );
                    })
                  }
                </View>
              </Animated.View>

              {/* instructions */}
              <Animated.View
                entering={FadeInDown.delay(300).duration(700).springify().damping(12)}
                className='py-1'
              >
                <Text
                  style={{ fontSize: hp(2.5) }}
                  className='font-bold text-primaryText flex-1'
                >
                  Instructions
                </Text>

                <Text style={{ fontSize: hp(1.6) }} className='text-primaryText'>
                  {
                    detail?.strInstructions
                  }
                </Text>
              </Animated.View>

              {/* recipe video */}
              {
                (detail?.strYoutube) &&
                <Animated.View
                  entering={FadeInDown.delay(400).duration(700).springify().damping(12)}
                  className='space-y-4 pt-4'
                >
                  <Text style={{ fontSize: hp(2.5) }} className='font-bold text-primaryText'>
                    Recipe Video
                  </Text>
                  <View>
                    <YoutubeIframe
                      videoId={_getYoutubeVideoId(detail.strYoutube)}
                      height={hp(30)}
                    />
                  </View>
                </Animated.View>
              }
            </View>
          )
      }

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: wp(98),
    height: hp(50),
    borderRadius: Platform.OS == 'android' ? 33 : 52,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 4,
  }
});

export default RecipeDetailScreen;
