import { useQuery } from "@tanstack/react-query";
import { foodService } from "../foodService";
import { RecipeDetail } from "../foodTypes";

function _randomNumber(min: number, max: number): number {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

function _randomDifficulty(): string {
    const random = Math.random();
    return random < 0.33 ? "Easy" : random < 0.66 ? "Normal" : "Hard";
}

async function requestDetail(id: string): Promise<RecipeDetail> {
    try {
        const response = await foodService.getRecipeDetail(id);
        return response.data.meals[0];
    } catch (error) {
        throw new Error('Error useRecipeDetail');
    }
}

export const useRecipeDetail = (id: string) => {
    const { data } = useQuery<RecipeDetail>({
        queryKey: ['useRecipeDetail', id],
        queryFn: async () => requestDetail(id),
    });

    const dataWithUpdate = (data)
        ? {
            ...data,
            time: _randomNumber(1, 99),
            servings: _randomNumber(1, 10),
            cals: _randomNumber(50, 500),
            difficulty: _randomDifficulty(),
        }
        : undefined;

    return dataWithUpdate;
}