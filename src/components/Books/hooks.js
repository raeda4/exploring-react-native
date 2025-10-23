import { useDispatch, useSelector } from 'react-redux'
import * as actions from './reducers'

export const useUpdateFields = (bookID) => {
  const dispatch = useDispatch()
  let fields;
  
  if (bookID) {
    fields = useSelector(state => state.book.library.books.find(a => a.id === bookID))
  }
  fields = useSelector(state => state.book.form.fields)

  return {
    fields,
    setFormField: (field) => (value) => { 
      //console.log(`Updating field ${field} to ${value}`)
      return dispatch(actions.setFormField({ field, value }))
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


export const useTestPost = () => {
  const dispatch = useDispatch()

  return {
    onSubmit: () => {
      console.log('Dispatching testPost')
      dispatch(actions.testPost())
    }
  }
}

export const useLibraryBooks = () => {
  return useSelector(state => state.book.library) // this is different from the solutions. If it correclated correctly it would be 'state.book.library.books' link: https://github.com/udacity/cd0444-react-native-exercises/blob/main/lesson-4-forms/exercises/solution/exercise-3-solution/src/features/animal/hooks.js
}