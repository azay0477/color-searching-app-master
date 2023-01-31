import Types from "./types";

const setAllColorsAction = (colors) => {
    return { 
        type: Types.ALL_COLORS,
        payload: colors
    }
}

export default { setAllColorsAction };