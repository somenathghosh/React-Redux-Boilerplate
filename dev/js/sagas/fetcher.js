import { takeLatest } from 'redux-saga';
import fetchSaga from './fetchSaga';
import * as types from '../constants/actionTypes';

export default function* getAllUsers() {
  yield* takeLatest(types.FETCH_REQUEST, fetchSaga);
}
