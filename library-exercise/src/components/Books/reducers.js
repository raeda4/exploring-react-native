import { createSlice } from "@reduxjs/toolkit";
import {
  PENDING,
  INPROGRESS,
  REQUESTING,
  SUCCESS,
  ERROR,
} from "../../utilities/helpers";

const name = "book";

const initialState = {
  list: {
    status: PENDING,
    library: [{
      id: 1,
      title: 'Parable of the Sower',
      author: 'Octavia Butler',
      publication_date: '1985'
    }],
  },
  form: {
    fields: {
      title: null,
      author: null,
      publication_date: null,
    },
  },
  create: {
    status: PENDING,
  },
  edit: {
    status: PENDING,
  },
  error: {
    message: "",
  },
};

const reducers = {
  createBook: (state) => {
    state.create.status = REQUESTING;
    console.log(state.create.status);
    console.log('createBook Reducer')
  },
  createBookResult: (state, { payload }) => {
    state.create.status = SUCCESS;
    state.list.library = payload;
    console.log('creatBookResult payload: ', payload)
    state.form.fields = initialState.form.fields;
    state.create = initialState.create;
    console.log('createBookResult library list: ', initialState.list.library)
    /* 
    state.create.status = SUCCESS
    state.list.animals = payload
    state.form.fields = initialState.form.fields
    state.create = initialState.create
    */
  },
  createBookError: (state, { payload }) => {
    state.create.status = ERROR;
    state.error.message = payload;
    state.form.fields = initialState.form.fields
  },
  editBook: (state, { payload }) => {
    state.edit.status = REQUESTING;
    console.log(state.create.status);
  },
  setForm: (state, { payload }) => {
    const book = state.list.library.find(a => a.id = payload);

    if (book) {
      state.form.fields = book;
    } else {
      state.error.message = `could not find book with id: ${payload}`;
    }
  },
  editBookResult: (state, { payload }) => {
    state.edit.status = SUCCESS;
    state.list.library = payload;
    state.form.fields = initialState.form.fields;
    state.edit = initialState.edit;
  },
  editBookError: (state) => {
    state.edit.status = ERROR;
    state.error.message = payload;
    state.form.fields = initialState.form.fields;
  },
  editBookStatus: (state, { payload }) => {
    state.edit = payload;
  },
  setFormField: (state, { payload }) => {
    const current = state.form.fields;
    const { field, value } = payload;

    const fields = {
      ...current,
      [field]: value,
    };

    state.form.fields = fields;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createBook,
  createBookResult,
  createBookError,
  setForm,
  editBook,
  editBookResult,
  editBookError,
  editBookStatus,
  setFormField,
} = slice.actions;

export default slice.reducer;
