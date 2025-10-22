import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useUpdateFields, submitButton } from "../hooks";
import stylesFn from "./styles";

const AddBook = () => {
  const { fields, setFormField } = useUpdateFields();
  const { title, author, publication_date } = fields;
  const styles = stylesFn();

  return (
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

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {submitButton}}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddBook;
