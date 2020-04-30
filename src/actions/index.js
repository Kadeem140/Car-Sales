export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function addFeature(input) {
    return {
        type: ADD_FEATURE,
        payload: input
    }
}



export function removeFeat(input) {
    return {
        type: REMOVE_FEATURE,
        payload: input
    }
}