import { all } from 'redux-saga/effects'
import book from '../components/Books/sagas'

export default function* rootSaga() {
    yield all([
        book(),
    ])
}