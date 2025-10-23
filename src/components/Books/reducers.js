import { createSlice } from "@reduxjs/toolkit";
import { PENDING, REQUESTING, SUCCESS, ERROR } from "../../utilities/helpers";

const name = "book";

const initialState = {
  list: {
    status: PENDING,
    library: [],
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
    console.log(state.create.status)
    console.log(form.fields)
  },
  createBookResult: (state, payload) => {
    state.edit.status = SUCCESS;
    state.list.library = payload;
  },
  createBookError: (state) => {
    state.edit.status = ERROR;
    state.error.message = payload;
  },
  createBookReset: (state) => {
    state.edit = initialState.edit;
  },
  testPost: (state, { payload }) => {
    // I'm not sure this is right
    state.edit.status = REQUESTING;
  },
  testPostResult: (state, { payload }) => {
    state.edit.status = SUCCESS;
    state.list.library = payload;
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
  createBookReset,
  testPost,
  testPostResult,
  setFormField,
} = slice.actions;

export default slice.reducer;
