import Header from '../Header/Header.jsx'
import {RecipeItem} from '../../RecipeItem.jsx'
import { useGetRecipesQuery } from '../../api/api';
import CreateRecipe from '../create-recipe/CreateRecipe.jsx'


const userId = 1
function App() {
    
    const {isLoading, data} = useGetRecipesQuery(undefined, { // можно использовать если юзера еще нет в системе допустим
        skip: !userId,
    })

    return (
        <section className='container'>
            <Header/>
            {/* <User/> */}
            <CreateRecipe />
            <div className='recipe-container'>
                {isLoading ? <div>Loading...</div> : data ? data.map(recipe => {
                    return (<RecipeItem key={recipe.id} recipe={recipe} />)
                }) : <p>Not Found</p>}
            </div>
        </section>
    );
}

export default App;