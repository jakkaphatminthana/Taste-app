import { Recipe } from "@/domain/foodTypes"
import HomeScreen from "@/screens/HomeScreen/HomeScreen"
import RecipeDetailScreen from "@/screens/RecipeDetailScreen/RecipeDetailScreen"
import WelcomeScreen from "@/screens/WelcomeScreen/WelcomeScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

export type AppStackParamList = {
    WelcomeScreen: undefined
    HomeScreen: undefined
    RecipeDetailScreen: { item: Recipe }
}

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
    return (
        <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='RecipeDetailScreen' component={RecipeDetailScreen} />
        </Stack.Navigator>
    );
}