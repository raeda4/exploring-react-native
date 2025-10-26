import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PENDING, INPROGRESS } from '../../utilities/helpers'
import * as actions from './reducers'

export const useUpdateFields = (bookID = null) => {
  const dispatch = useDispatch()
  const status = useSelector(state => state.book.edit.status)
  const fields = useSelector(state => state.book.form.fields)

  //console.log("Book ID :::", bookID, status, bookID && status !== INPROGRESS)

  useEffect(() => {
    if (bookID && status === PENDING) {
      dispatch(actions.setForm(bookID))
    }
  }, [bookID, status])

  return {
    fields,
    setFormField: (field, value) => {
      //console.log('Updating field ${field} to ${value}')

      dispatch(actions.setFormField({ field, value }))
    },
  }
}


export const useNewBook = () => {
  const dispatch = useDispatch()

  return {
    onSubmit: () => {
      console.log('Dispatching createBook action')
      dispatch(actions.createBook())
    }
  }
}

export const useCreateBookStatus = () => {
  return useSelector(state => state.book.create.status)
}


export const useEditBook = (bookID) => {
  const dispatch = useDispatch()
  const status = useEditBookStatus()

  return {
    status,
    onSubmit: () => {
      console.log('Dispatching editBook action')
      dispatch(actions.editBook(bookID))
    }
  }
}

export const useEditBookStatus = () => {
  return useSelector(state => state.book.edit.status)
}

export const useLibraryBooks = () => {
  return useSelector(state => state.book.list.library) 
}