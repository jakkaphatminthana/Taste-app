import { FoodService } from "./foodApi";

async function getCategories() {
    try {
        const response = await FoodService.getCategories();
        return response;
    } catch (error) {
        throw new Error(`error getCategories: ${error}`);
    }
}

async function getRecipes(queryParams: string) {
    try {
        const response = await FoodService.getRecipes(queryParams);
        return response;
    } catch (error) {
        throw new Error(`error getRecipes: ${error}`);
    }
}

async function getRecipeDetail(queryParams: string) {
    try {
        const response = await FoodService.getRecipeDetail(queryParams);
        return response;
    } catch (error) {
        throw new Error(`error getRecipeDetail: ${error}`);
    }
}

async function searchRecipeByName(queryParams: string) {
    try {
        const response = await FoodService.searchRecipe(queryParams);
        return response;
    } catch (error) {
        throw new Error(`error searchRecipeByName`);
    }
}

export const foodService = {
    getCategories,
    getRecipes,
    getRecipeDetail,
    searchRecipeByName,
}