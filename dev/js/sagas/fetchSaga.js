import { put, call } from 'redux-saga/effects';
import { getUsers } from '../api/api';
import * as types from '../constants/actionTypes';

export default function* getAllUsers({ payload }) {
  try {
    const videos = yield call(getUsers, payload);
    yield [
      put({ type: types.FETCH_SUCCESS, user }),
      put({ type: types.SELECTED_USER, user: user[0] })
    ];
  } catch (error) {
    yield put({ type: 'FETCH_FAILURE', error });
  }
}
