import { GET_MUSIC_LIST_ACTION, GET_MUSIC_LIST_SUCCESS_ACTION, GET_MUSIC_LIST_FAILURE_ACTION } from "./ActionTypes"

export const getMusicListAction = (params, isLoading) => {
    return {
        type: GET_MUSIC_LIST_ACTION,
        params: params,
        isLoading: isLoading
    }
}
export const getMusicListSuccessAction = (payload, isLoading) => {
    return {
        type: GET_MUSIC_LIST_SUCCESS_ACTION,
        payload: payload,
        isLoading: isLoading
    }
}
export const getMusicListFailureAction = (errorMessage, isLoading) => {
    return {
        type: GET_MUSIC_LIST_FAILURE_ACTION,
        errorMessage: errorMessage,
        isLoading: isLoading
    }
}