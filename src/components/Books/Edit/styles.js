import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    textInput: {
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 4,
      padding: 15,
      margin: 10,
    },
    submitButton: {
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 4,
      padding: 15,
      margin: 10,
      backgroundColor: 'gray',
      alignItems: 'center'
    },
  });
};

export default stylesFn;
