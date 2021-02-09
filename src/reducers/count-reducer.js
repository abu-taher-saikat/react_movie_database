export const ISLOADING = "ISLOADING";


export const createActions = (dispatch) => ({
    isloading : (value) => dispatch({type : ISLOADING, payload : value || null})
});

const reducer = (state, action) => {
    switch(action.type){
        case ISLOADING : {
            return state + action.payload;
        }
        default : 
            return state;
    }
}

export default reducer;