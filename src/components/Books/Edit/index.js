import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useUpdateFields, useEditBook, useEditBookStatus } from "../hooks";
import stylesFn from "./styles";
import { useRoute } from "@react-navigation/native";
import { PENDING, REQUESTING, SUCCESS, ERROR } from "../../../utilities/helpers";

const Form = () => {
  const styles = stylesFn()
  const { params } = useRoute()
  const { fields, setFormField } = useUpdateFields(params.bookID)
  const { onSubmit } = useEditBook(params.bookID)
  const status = useEditBookStatus()

  const {
    title,
    author,
    publication_date,
  } = fields


  return (
      <View>
        
      </View>
  )
}

export default Form;
