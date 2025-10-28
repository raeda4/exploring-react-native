import { View, Text, TouchableOpacity } from 'react-native'
import stylesFn from './styles'
import { useNavigation } from '@react-navigation/native'

export default function FlexBox2() {
  const { navigate } = useNavigation();
  const styles = stylesFn();
  return (
  <View style={{ flex: 1 }}>
    <View style={ styles.topThird }>
      <View style={ styles.topThirdBox }>
        <Text>First Box</Text>
      </View>
    </View>
    <View style={ styles.midThird }>
      <TouchableOpacity 
        style={ styles.midThirdBox }
        onPress={() => {
          navigate("Third Flex Box")
        }}
      >
        <Text>Go to Third Box!</Text>
      </TouchableOpacity>
    </View>
    <View style={ styles.bottomThird }>
    </View>
  </View> 
  )
}