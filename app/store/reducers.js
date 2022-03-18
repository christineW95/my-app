import {FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from './action';

const initialState = {
    pending: false,
    payload: [],
    error: null
}

 function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_DATA_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                payload: action.payload
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
export default reducer;
// export const getProducts = state => state.payload;
// export const getProductsPending = state => state.pending;
// export const getProductsError = state => state.error;