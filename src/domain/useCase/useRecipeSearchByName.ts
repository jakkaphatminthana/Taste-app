import { useQuery } from "@tanstack/react-query";
import { foodService } from "../foodService";
import { Recipe } from "../foodTypes";

async function searchRecipe(term: string): Promise<Recipe[]> {
    if (term == '') return [];

    try {
        const response = await foodService.searchRecipeByName(term);
        return response.data.meals;
    } catch (error) {
        throw new Error('Error useRecipeSearchByName');
    }
}

export const useRecipeSearchByName = (term: string): Recipe[] => {
    const { data } = useQuery<Recipe[]>({
        queryKey: [`useRecipeSearchByName/${term}`],
        queryFn: async () => searchRecipe(term),
    });

    return data || [];
}