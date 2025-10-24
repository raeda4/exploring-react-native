import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEditBook, useEditBookStatus } from "../hooks";
import stylesFn from "./styles";
import { useRoute } from "@react-navigation/native";
import Form from "../Form";

const Edit = () => {
  const { params } = useRoute()
  const { bookID } = params 
  const { status, onSubmit } = useEditBook(bookID)

  return (
      <Form handleSubmit={onSubmit} status={status} bookID={bookID} />
  )
}

export default Edit;
