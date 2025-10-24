import { all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducers'

console.log('create saga')

export function* watchCreateBook() {
    yield takeLatest(actions.createBook.toString(), takeCreateBook)
    console.log('create saga - watchCreateBook function')
}

export function* takeCreateBook() {
    console.log('Start fetch request to API')
    try {
        const fields = yield select(state => state.book.form.fields)
        const books = yield select(state => state.book.list.library)

        const book = {
            id: books.length + 1,
            ...fields,
        }

        //preted call to API
        yield delay(500)

        const result = [book, ...books]

        yield put(actions.createBookResult(result))
    } catch (error) {
        yield put(actions.createBookError(error.toString()))
    }
}