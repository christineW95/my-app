import {useDispatch} from 'react-redux'; 
const dispatch = useDispatch();
dispatch({type: "SUCCESS", payload: tasks,loading:false})
dispatch({type: "FAILURE", payload: [],error:error,loading:false})
dispatch({type: "REQUEST", payload: [],error:null,loading:true})
 // tasks = fetched api data you are sending to your redux method
