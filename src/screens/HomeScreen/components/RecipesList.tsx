import Loading from '@/components/Loading';
import { Recipe } from '@/domain/foodTypes';
import * as React from 'react';
import { Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '@/navigation/AppStack';


interface RecipesListProps {
  recipes: Recipe[];
}

function RecipesList({ recipes }: RecipesListProps) {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  return (
    <View>
      <View className='flex-1 mt-[8px]'>
        <MasonryList
          data={recipes}
          keyExtractor={(item: Recipe) => item.idMeal} //idMeal from api
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          renderItem={({ item, i }) =>
            <RecipeItem item={item as Recipe} index={i} navigation={navigation} />
          }
        />
      </View>
    </View>
  );
};

interface RecipeItemProps {
  item: Recipe;
  index: number;
  navigation: NavigationProp<AppStackParamList>;
}

const RecipeItem = ({ item, index, navigation }: RecipeItemProps) => {
  let isEven = index % 2 == 0;

  return (
    <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}>
      <Pressable
        onPress={() => navigation.navigate('RecipeDetailScreen', { item })}
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          borderRadius: 35,
          paddingLeft: isEven ? 0 : 16,
          marginBottom: 16,
        }}
      >
        <Image
          source={{ uri: item.strMealThumb }}
          style={{
            width: '100%',
            height: (index % 3 == 0) ? hp(25) : hp(35),
            borderRadius: 35,
          }}
          className='bg-black/5'
        />
        {/* <CachedImage
          uri={item.strMealThumb}
          style={{
            width: '100%',
            height: (index % 3 == 0) ? hp(25) : hp(35),
            borderRadius: 35,
          }}
          className='bg-black/5'
        /> */}
        <View style={{ marginLeft: 8, marginTop: 4 }}>
          <Text style={{ fontSize: hp(1.5) }} className='text-primaryText font-medium'>
            {
              (item.strMeal.length > 20)
                ? item.strMeal.slice(0.20) + '...'
                : item.strMeal
            }
          </Text>
        </View>

      </Pressable>
    </Animated.View>
  );
}

export default RecipesList;