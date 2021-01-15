import { all, takeLatest } from 'redux-saga/effects';
import { GET_MUSIC_LIST_ACTION } from '../Redux/Actions/ActionTypes';
import { getMusicListSaga } from './SearchResultsSaga';
import API from '../Services/Api'


const api = API.create()

export function* rootSaga() {
    yield all([
        takeLatest(GET_MUSIC_LIST_ACTION, getMusicListSaga, api),
    ]);
};