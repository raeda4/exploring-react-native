import { all } from 'redux-saga/effects'
import { watchCreateBook } from './create'

export default function* book() {
    yield all([
        watchCreateBook
    ])
}