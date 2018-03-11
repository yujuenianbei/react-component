import * as ActionType from './actionType'

export const inc=(counter)=>{
    return{
        type:ActionType.increse,
        counter:counter
    }
}

export const dec =(counter)=>{
    return{
        type:ActionType.decrese,
        counter:counter
    }
}
