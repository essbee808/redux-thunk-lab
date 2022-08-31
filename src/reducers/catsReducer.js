// add the catsReducer
const catsReducer = (state = {cats: [], loading: false}, action) => {

    switch (action.type) {
        case "LOADING_CATS":
            return {
                ...state, 
                cats: [...state.cats],
                loading: true,
            };
        
        // hint: expecting a payload object with a cats key
        case "ADD_CATS":
            return {
                ...state,
                cats: action.cats,
                loading: false,
            };
        
        default:
            return state;
    }
}

export default catsReducer;