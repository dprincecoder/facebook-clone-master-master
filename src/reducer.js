// let user first approach be not login
export const initialState = {
    user: null,
}

//lets action type be to set user to be login
export const actionTypes = {
    SET_USER: "SET_USER",
};


//LETS  USE REDUCER KEY TO SIGN MONITOR AND HAVE CONTROL OF LOGINED USER
 const reducer = (action, state) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
    
        default:
            return state;
    }
}

export default reducer;