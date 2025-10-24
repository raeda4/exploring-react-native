import { all } from 'redux-saga/effects'
import { watchCreateBook } from './create'
import { watchEditBook } from './edit'

export default function* book() {
    yield all([
        watchCreateBook(),
        watchEditBook(),
    ])
}