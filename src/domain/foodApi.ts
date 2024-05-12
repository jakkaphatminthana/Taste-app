import api from '../utils/api';

export const FoodService = {
    getCategories: () => api.get('categories.php'),
    getRecipes: (category: string) => api.get(`filter.php?c=${category}`),
    getRecipeDetail: (id: string) => api.get(`lookup.php?i=${id}`),
    searchRecipe: (nameTerm: string) => api.get(`search.php?s=${nameTerm}`),
}