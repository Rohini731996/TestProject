import * as Actions from '../Actions/ActionTypes'


const initialState = {
    payload: null,
    isLoading: false
};
// Redux: Counter Reducer
const MusicListReducer = (state = initialState, action) => {

    const { payload, isLoading } = action
    switch (action.type) {
        case Actions.GET_MUSIC_LIST_ACTION: {
            return {
                ...state,
                payload: null,
                isLoading: !isLoading
            };
        }
        case Actions.GET_MUSIC_LIST_SUCCESS_ACTION: {
            return {
                ...state,
                payload,
                isLoading: false
            };
        }
        case Actions.GET_MUSIC_LIST_FAILURE_ACTION: {
            return {
                ...state,
                payload: null,
                isLoading: false
            };
        }
        default: {
            return state;
        }
    }
};
// Exports
export default MusicListReducer;
