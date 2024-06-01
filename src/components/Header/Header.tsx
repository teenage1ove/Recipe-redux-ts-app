import { FaHeart } from "react-icons/fa";
import { useFavorites } from '../../hooks/useFavorites'
import { useGetRecipesQuery } from '../../api/api'



function Header() {
    const favorites = useFavorites()
    return ( 
        <header className='favorites-container'>
            <FaHeart />
            {favorites.length}
        </header>
     );
}

export default Header;