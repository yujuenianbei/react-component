import * as ActionType from './actionType';

export const leftMenu = (leftMenu) =>{
    return {
        type:ActionType.LEFTMENU,
        leftMenu:leftMenu
    }
}