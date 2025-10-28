import { View, Text, TouchableOpacity } from 'react-native'
import stylesFn from './styles'
import { useNavigation } from '@react-navigation/native'

export default function FlexBox1() {
  const { navigate } = useNavigation();
  const styles = stylesFn();
  return (
  <View style={{ flex: 1 }}>
    <View style={ styles.topThird }>
      <TouchableOpacity style={ styles.topThirdBox }
        onPress={() => {
          navigate("Second Flex Box")
        }}
      >
        <Text>Go to Box 2!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.topThirdBackButton }
        onPress={() => {
          navigate("Third Flex Box")
        }}
      >
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
    <View style={ styles.midThird }>
    </View>
    <View style={ styles.bottomThird }>
    </View>
  </View> 
  )
}