import { IrecipeData } from '../types/recipe.types'
import { api } from './api';

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        createRecipe: builder.mutation<null, IrecipeData>({
            query: (recipe) => ({
                body: recipe,
                url: '/',
                method: 'POST'
            }),
            invalidatesTags: () => [{
                type: 'Recipe'
            }]
        })
    })
})

export const {useCreateRecipeMutation} = recipeApi