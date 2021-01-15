import { combineReducers } from 'redux';

import MusicListReducer from './Reducers/SearchResultsReducer';

const rootReducer = combineReducers({
    searchResults: MusicListReducer,
});

export default rootReducer;