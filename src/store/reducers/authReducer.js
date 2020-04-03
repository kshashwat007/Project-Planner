const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log("Login failure")
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log("Login success")
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log("Signout Success")
            return state;
        default:
            return state;
    }
 
}

export default authReducer