import { useDispatch, useSelector } from 'react-redux'
import { actions } from './store/favorites/favorites.slice'
import { useFavorites } from './hooks/useFavorites'


export function RecipeItem({recipe}) {
    const favorites = useFavorites()
    const dispatch = useDispatch()

    const isExists = favorites.some(r => r.id === recipe.id)

    return (
        <div className='recipe'>
            <img src={recipe.image} alt={recipe.name} className='recipe-img'/>
            <h2 className='recipe-name'>{recipe.name}</h2>
            <button onClick={() => dispatch(actions.toggleFavorites(recipe))} className='recipe-button'>{isExists ? 'Remove from ' : "Add to "} {"<3"}</button>
        </div>
    )
}