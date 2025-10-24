import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useUpdateFields } from "../hooks";
import stylesFn from "./styles";
import { useNavigation } from "@react-navigation/native";
import {
  PENDING,
  INPROGRESS,
  REQUESTING,
  SUCCESS,
  ERROR,
} from "../../../utilities/helpers";

const Form = ({ handleSubmit, status, bookID }) => {
  const styles = stylesFn();
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateFields(bookID);

  const { title, author, publication_date } = fields;

  const onSubmit = () => {
    handleSubmit();
    navigate("Library");
  };

  return (
    <View style={styles.container}>
      <TextInput
        key={"title"}
        placeholder="Book Title"
        value={title || ""}
        style={styles.textInput}
        onChangeText={v => setFormField('title', v)}
      />

      <TextInput
        key={"author"}
        placeholder="Author"
        value={author || ""}
        style={styles.textInput}
        onChangeText={v => setFormField('author', v)}
      />

      <TextInput
        key={"publication_date"}
        placeholder="Publication Date"
        value={publication_date || ""}
        style={styles.textInput}
        onChangeText={v => setFormField('publication_date', v)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={onSubmit} disabled={status !== PENDING && status !== INPROGRESS}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
