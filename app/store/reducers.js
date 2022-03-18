import {useSelector,useDispatch } from 'react-redux'
function reducer(state = { data: "" }, action) {
    switch (action.type) {
      case "FETCH_DATA":
        return {
          ...state,
          data: action.data
        };
        case "FAILURE":
            return {
              ...state,
              data: [],
              error:'Err'
            };
           
      default:
        return state;
    }
  }
  
  export default reducer;