import { useSelector } from 'react-redux'
import { actions } from '../store/favorites/favorites.slice'
export const useFavorites = () => {
    const favorites = useSelector(state => state.favorites)

    return favorites
}