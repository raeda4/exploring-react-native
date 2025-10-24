import { all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducers'

export function* watchEditBook() {
    yield takeLatest(actions.editBook.toString(), takeEditBook)
}

export function* takeEditBook() {
    console.log('Start fetch request to API to edit')
    const bookID = actions.payload

    try {
        const fields = yield select(state => state.book.form.fields)
        const books = yield select(state => state.book.list.library)

        const result = books.map(book => {
            if (book.id !== bookID) return book

            return fields
        })

        //preted call to API
        yield delay(500)

        yield put(actions.editBookResult(result))
    } catch (error) {
        yield put(actions.editBookError(error.toString()))
    }
}