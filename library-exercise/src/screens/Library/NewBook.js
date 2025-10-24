import React from "react";
import { ScrollView } from "react-native";
import AddBook from "../../components/Books/New";

// top level display component only - declares a view that will be part of navigation
const NewBook = () => (
  <ScrollView>
    <AddBook />
  </ScrollView>
);

export default NewBook;
