import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useUpdateFields, useNewBook } from "../hooks";
import stylesFn from "./styles";
import { useNavigation } from "@react-navigation/native";

const AddBook = () => {
  const { fields, setFormField } = useUpdateFields();
  const { title, author, publication_date } = fields;
  const styles = stylesFn();
  const { onSubmit } = useNewBook();
  const { navigate } = useNavigation();


  return (
    <View>
      <View>
        <TextInput
          key={"title"}
          placeholder="Book Title"
          value={title || ""}
          style={styles.textInput}
          onChangeText={setFormField("title")}
        />

        <TextInput
          key={"author"}
          placeholder="Author"
          value={author || ""}
          style={styles.textInput}
          onChangeText={setFormField("author")}
        />

        <TextInput
          key={"publication_date"}
          placeholder="Publication Date"
          value={publication_date || ""}
          style={styles.textInput}
          onChangeText={setFormField("publication_date")}
        />

        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={() => {
            navigate("Library")
          }}>
          <Text>View Library</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddBook;
