export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

export interface Recipe {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export interface RecipeDetail {
    idMeal: string;
    strMeal: string;
    strDrinkAlternate?: string | null | undefined;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredient1?: string | null | undefined;
    strIngredient2?: string | null | undefined;
    strIngredient3?: string | null | undefined;
    strIngredient4?: string | null | undefined;
    strIngredient5?: string | null | undefined;
    strIngredient6?: string | null | undefined;
    strIngredient7?: string | null | undefined;
    strIngredient8?: string | null | undefined;
    strIngredient9?: string | null | undefined;
    strIngredient10?: string | null | undefined;
    strMeasure1?: string | null | undefined;
    strMeasure2?: string | null | undefined;
    strMeasure3?: string | null | undefined;
    strMeasure4?: string | null | undefined;
    strMeasure5?: string | null | undefined;
    strMeasure6?: string | null | undefined;
    strMeasure7?: string | null | undefined;
    strMeasure8?: string | null | undefined;
    strMeasure9?: string | null | undefined;
    strMeasure10?: string | null | undefined;
    strSource?: string | null | undefined;
    strImageSource?: string | null | undefined;
    strCreativeCommonsConfirmed?: string | null | undefined;
    dateModified?: string | null | undefined;
    //make
    time?: number | undefined;
    servings?: number | undefined; 
    cals?: number | undefined;
    difficulty?: string | undefined;
}