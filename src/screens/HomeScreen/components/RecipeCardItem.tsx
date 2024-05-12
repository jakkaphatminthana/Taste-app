// import { View, Text, Pressable } from 'react-native'
// import React from 'react'
// import { Recipe } from '@/domain/foodTypes'
// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import Animated, { FadeInDown } from 'react-native-reanimated';
// import { CachedImage } from '@/helpers/CachedImage';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { AppStackParamList } from '@/navigation/AppStack';

// interface RecipeCardItemProps {
//     item: Recipe;
//     index: number;
//     // navigation: NavigationProp<AppStackParamList>;
// }

// export default function RecipeCardItem({ item, index }: RecipeCardItemProps) {
//     const navigation = useNavigation<NavigationProp<AppStackParamList>>();
//     let isEven: boolean = index % 2 == 0;

//     return (
//         <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}>
//             <Pressable
//                 onPress={() => navigation.navigate('RecipeDetailScreen', { item })}
//                 style={{
//                     flex: 1,
//                     width: '100%',
//                     justifyContent: 'center',
//                     borderRadius: 35,
//                     paddingLeft: isEven ? 0 : 16,
//                     marginBottom: 16,
//                 }}
//             >
//                 <CachedImage
//                     uri={item.strMealThumb}
//                     style={{
//                         width: '100%',
//                         height: (index % 3 == 0) ? hp(25) : hp(35),
//                         borderRadius: 35,
//                     }}
//                     className='bg-dark/5'
//                 />
//                 <Text
//                     style={{ fontSize: hp(1.5) }}
//                     className='text-primaryText font-medium ml-2'
//                 >
//                     {
//                         item.strMeal.length > 20
//                             ? item.strMeal.slice(0, 20) + '...'
//                             : item.strMeal
//                     }
//                 </Text>

//             </Pressable>
//         </Animated.View>
//     )
// }