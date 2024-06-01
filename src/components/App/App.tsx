import { RecipeItem } from '../../RecipeItem.js'
import { useGetRecipesQuery } from '../../api/api.js'
import Header from '../Header/Header.js'
import CreateRecipe from '../create-recipe/CreateRecipe.js'

const userId = 1
function App() {
	const { isLoading, data } = useGetRecipesQuery(undefined, {
		// можно использовать если юзера еще нет в системе допустим
		skip: !userId,
	})

	return (
		<section className='container'>
			<Header />
			{/* <User/> */}
			<CreateRecipe />
			<div className='recipe-container'>
				{isLoading ? (
					<div>Loading...</div>
				) : data ? (
					data.map(recipe => {
						return <RecipeItem key={recipe.id} recipe={recipe} />
					})
				) : (
					<p>Not Found</p>
				)}
			</div>
		</section>
	)
}

export default App
