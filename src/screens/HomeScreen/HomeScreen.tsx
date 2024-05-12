import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Image, Platform, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { BellIcon } from 'react-native-heroicons/outline';
import { COLORS } from '@/theme/theme';
import SearchBar from './components/SearchBar';
import { useCategoryList } from '@/domain/useCase/useCategoryList';
import CategoriesList from './components/CategoriesList';
import { useRecipeList } from '@/domain/useCase/useRecipeList';
import RecipesList from './components/RecipesList';
import { Recipe } from '@/domain/foodTypes';
import { useRecipeSearchByName } from '@/domain/useCase/useRecipeSearchByName';

const HomeScreen = () => {
  const defulatCategory = 'Beef'
  const [activeCategory, setActiveCategory] = useState<string>(defulatCategory);
  const [inputSearch, setInputSearch] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [recipes, setRecipes] = useState<Recipe[] | undefined>([]);
  const categories = useCategoryList();
  const recipeList = useRecipeList(activeCategory);
  const recipeFromSearch = useRecipeSearchByName(searchTerm);

  const _handleChangeCategory = (category: string) => {
    setActiveCategory(category);
    setSearchTerm('');
  }

  const _handleSubmitSearch = () => {
    if (inputSearch != '') {
      setSearchTerm(inputSearch);
      setActiveCategory('');
      setInputSearch('');
    }
  }

  useEffect(() => {
    if (recipeFromSearch && recipeFromSearch.length) {
      setRecipes(recipeFromSearch);
    }
  }, [recipeFromSearch])

  useEffect(() => {
    if (activeCategory && activeCategory != '') {
      setRecipes(recipeList);
    }
  }, [activeCategory, recipeList,]);


  return (
    <SafeAreaView style={styles.safeArea}>
      <View className='mx-4'>
        <ExpoStatusBar style='dark' />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: hp(2) }}
        >

          {/*  avatar and bell icon */}
          <View className='flex-row items-center justify-between'>
            <Image
              source={require('../../assets/images/user.png')}
              style={{ height: hp(4), width: hp(4) }}
            />
            <BellIcon size={hp(4)} color={COLORS.darkColor} />
          </View>

          {/* greetings and punchline */}
          <View className='pt-4'>
            <Text style={{ fontSize: hp(1.7) }} className='font-regular text-primaryText'>
              Hello, Username
            </Text>
            <Text style={{ fontSize: hp(3.8) }} className='font-medium text-primaryText'>
              Make your own food,
            </Text>
            <Text style={{ fontSize: hp(3.8) }} className='font-medium text-primaryText'>
              stay at <Text
                style={{ fontSize: hp(3.8) }}
                className='font-medium text-primary'>
                home
              </Text>
            </Text>
          </View>

          {/* search bar */}
          <View className='pt-4'>
            <SearchBar
              inputSearch={inputSearch}
              setInputSearch={setInputSearch}
              onSubmit={_handleSubmitSearch}
            />
          </View>

          {/* categories */}
          <View className='py-4'>
            {
              (categories && categories.length > 0)
              && <CategoriesList
                categories={categories}
                activeCategory={activeCategory}
                handleChangeCategory={_handleChangeCategory}
              />
            }
          </View>

          {/* Recipes */}
          <View className='py-4'>
            <Text className='text-primaryText font-medium' style={{ fontSize: hp(3) }}>
              Recipes
            </Text>
            {
              (!categories || !recipes)
                ? null
                : <RecipesList recipes={recipes} />
            }
          </View>
        </ScrollView>
      </View >
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;