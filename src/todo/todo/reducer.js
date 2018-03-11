import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actions/actionType';

export default (state=[],action) =>{
    switch(action.type){
        case ADD_TODO:{
            return [
                {
                    id:action.id,
                    complete:false,
                    context:action.context
                },
                ...state
            ]
        }
        case TOGGLE_TODO:{
            return state.map((list)=>{
                if(list.id === action.id){
                    return{...list,complete:!list.complete}
                }else{
                    return list
                }
            })
        }
        case REMOVE_TODO:{
            return state.fliter((list)=>{
                return list.id !== action.id
            })
        }
        default :
            return state
    }
}