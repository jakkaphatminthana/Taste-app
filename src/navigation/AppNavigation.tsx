import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen/RecipeDetailScreen";
import { Recipe } from "@/domain/foodTypes";
import { AppStack } from "./AppStack";

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="App" component={AppStack}/>
        </RootStack.Navigator>
    );
}

function AppNavigation() {
    return (
        <NavigationContainer>
            <RootStackScreen/>
        </NavigationContainer>
    );
}

export default AppNavigation;