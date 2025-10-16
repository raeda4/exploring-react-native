import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import stylesFn from "./styles";

export default function Welcome() {
  const { navigate } = useNavigation();
  const styles = stylesFn();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topThird}>
        <View style={styles.topThirdBox}>
          <Text>Test</Text>
        </View>
      </View>
      <View style={styles.midThird}>
        <TouchableOpacity
          style={styles.midThirdBox}
          onPress={() => {
            navigate("Flex Boxes") //This needs to match the name in the nav file
          }}
        >
          <Text>Go to Flex Boxes!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomThird}>
        <View style={styles.bottomThirdBox}>
          <Text>Third Box</Text>
        </View>
      </View>
    </View>
  )
}
