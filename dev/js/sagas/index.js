import { fork } from 'redux-saga/effects';
import watchData from './fetcher';

export default function* startForman() {
  yield fork(watchData);
}
