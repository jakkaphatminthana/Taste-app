import { useQuery } from "@tanstack/react-query";
import { foodService } from "../foodService"
import { Category } from "../foodTypes";

const fetchCategories = async (): Promise<Category[]> => {
    try {
        const response = await foodService.getCategories();
        return response.data.categories;
    } catch (error) {
        throw new Error('Error useCategoryList');
    }
}

export const useCategoryList = () => {

    const { data } = useQuery<Category[]>({
        queryKey: ["categoryList"],
        queryFn: async () => fetchCategories(),
    });

    return data;
}