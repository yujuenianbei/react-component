import * as ActionType from '../action/actionType'

export default (state,action)=>{
    const {counter} = action;
    switch(action.type){
        case ActionType.increse:
        return {...state,[counter]: state[counter] +1}
        case ActionType.decrese:
        return {...state,[counter]:state[counter]-1}
        default:
        return state
    }
}
