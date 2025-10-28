import { View, Text, TouchableOpacity } from 'react-native'
import stylesFn from './styles'
import { useNavigation } from '@react-navigation/native'

export default function FlexBox3() {
  const { navigate } = useNavigation();
  const styles = stylesFn();
  return (
  <View style={{ flex: 1 }}>
    <View style={ styles.topThird }>
      <View style={ styles.topThirdBox }>
        <Text>First Flex Box</Text>
      </View>
    </View>
    <View style={ styles.midThird }>
      <View style={ styles.midThirdBox }>
        <Text>Second Box</Text>
      </View>
    </View>
    <View style={ styles.bottomThird }>
      <TouchableOpacity style={ styles.bottomThirdBox }
        onPress={() => {
          navigate("First Flex Box")
        }}
      >
        <Text>Back to Flex Home!</Text>
      </TouchableOpacity>
    </View>
  </View> 
  )
}