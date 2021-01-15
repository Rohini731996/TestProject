import { call, put } from 'redux-saga/effects';
import { getMusicListSuccessAction, getMusicListFailureAction } from '../Redux/Actions/SearchReducerAction'


export function* getMusicListSaga(api, action) {
  const { params } = action

  const response = yield call(api.getMusicList, params)

  if (response && response.data) {
    yield put(getMusicListSuccessAction(response.data, false))
  }
  else {
    yield put(getMusicListFailureAction("something went wrong", false))
  }

};
