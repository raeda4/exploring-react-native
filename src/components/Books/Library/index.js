import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useLibraryBooks } from "../hooks";
import stylesFn from "./styles";
import Row from "../Library/row";
import { useNavigation } from "@react-navigation/native";

const Library = () => {
  const styles = stylesFn();
  const { navigate } = useNavigation();
  const books = useLibraryBooks();

  return (
    <View>
      <View>
        <Text>Library</Text>
        {books && books.length > 0 ? (
          <FlatList
            data={books || []}
            renderItem={(props) => <Row {...props} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <>
            <Text>{"No Books"}</Text>
          </>
        )}
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          navigate("Add Book");
        }}
      >
        <Text>Add Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Library;
