import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionType';

let nextCount =0;
// 新增
export const add=(context)=>{
    return{
        type:ADD_TODO,
        id:nextCount,
        context:context,
        complete:false
    }
}
// 修改
export const toggle =(id)=>{
    return{
        type:TOGGLE_TODO,
        id:id
    }
}
// 删除
export const remove =(id)=>{
    return{
        type:REMOVE_TODO,
        id:id
    }
}