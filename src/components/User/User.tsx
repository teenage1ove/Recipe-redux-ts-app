import { useDispatch, useSelector } from 'react-redux'
import { getUserById } from '../../store/user/user.action';
function User() {
    const dispatch = useDispatch()
    const {isLoading, error, user} = useSelector(state => state.user)
    
    return (
    <div>
        <button onClick={() => dispatch(getUserById(1))}>Get User</button>
        {isLoading ? (<div>LOADING</div>): error ? (<div>{error.message}</div>) : user.name ? 
        (<h1>User: {user.name}</h1>)
        : (<h1>User Not Found</h1>)
        }
        
    </div>);
}

export default User;


