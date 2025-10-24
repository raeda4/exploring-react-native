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
        const library = yield select(state => state.book.list.library)

        const book = {
            id: library.length + 1,
            ...fields,
        }

        //preted call to API
        yield delay(500)
        console.log('Finish API Call')

        const result = [book, ...library]
        console.log(result)

        yield put(actions.createBookResult(result))
    } catch (error) {
        yield put(actions.createBookError(error.toString()))
        console.log('sagas/create.js error')
    }
}