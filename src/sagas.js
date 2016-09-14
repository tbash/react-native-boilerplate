import { fork } from 'redux-saga/effects'

export default function * rootSaga () {
  yield [
    // fork your daemons
    // fork(startUp),
  ]
}
