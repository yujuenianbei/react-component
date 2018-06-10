import * as ActionType from '../actions/actionType';

export default (state, action) => {
    const { leftMenu } = action;
    switch (action.type) {
        case ActionType.LEFTMENU:
            return { ...state, [leftMenu]: !state[leftMenu] };
        default:
            return state;
    }
}