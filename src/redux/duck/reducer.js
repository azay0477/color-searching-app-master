import Types from "./types";

const iState = {
    type: 'INITIAL_STATE',
    colors: []
}

const AppReducer = (state = iState, action) => {
    switch (action.type) {
        case Types.ALL_COLORS:
            return { ...state, colors: action.payload }
        default:
            return state;
    }
}

export default AppReducer;