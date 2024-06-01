import { FormEvent, useState } from 'react'
import { useCreateRecipeMutation } from '../../api/recipe.api'
import { IrecipeData } from '../../types/recipe.types'

const defaultValue:IrecipeData = {
    name: '',
    image: ''
}

function CreateRecipe() {
    const [recipe, setRecipe] = useState(defaultValue)

    const [createRecipe] = useCreateRecipeMutation({

    })

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createRecipe(recipe).then(() => {
            setRecipe(defaultValue)
        })
        console.log(recipe)
    }

    
    return ( 
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <label >
                    <input className='form-input' type="text" placeholder='Name' value={recipe.name} onChange={e => setRecipe({
                        ...recipe,
                        name: e.target.value
                    })}/>
                </label>
                <label >
                    <input className='form-input' type="text" placeholder='Image' value={recipe.image} onChange={e => setRecipe({
                        ...recipe,
                        image: e.target.value
                    })}/>
                </label>
                <button type='submit' className='form-button'>Create</button>
            </form>
        </div>
     );
}

export default CreateRecipe;