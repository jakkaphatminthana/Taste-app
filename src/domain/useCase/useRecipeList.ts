import { useQuery } from "@tanstack/react-query";
import { foodService } from "../foodService"
import { Recipe } from "../foodTypes";

async function requestRecipes(category: string): Promise<Recipe[]> {
    try {
        const response = await foodService.getRecipes(category);
        return response.data.meals;
    } catch (error) {
        throw new Error('Error useRecipeList');
    }
}

export const useRecipeList = (category: string) => {
    const { data } = useQuery<Recipe[]>({
        queryKey: ["useRecipeList", category],
        queryFn: async () => requestRecipes(category),
    });

    return data;
}