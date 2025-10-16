import { View, Text } from 'react-native'
import stylesFn from './styles'

export default function FlexBoxes() {
  const styles = stylesFn()
  return (
  <View style={{ flex: 1 }}>
    <View style={ styles.topThird }>
      <View style={ styles.topThirdBox }>
        <Text>Test</Text>
      </View>
    </View>
    <View style={ styles.midThird }>
      <View style={ styles.midThirdBox }>
        <Text>Second Box</Text>
      </View>
    </View>
    <View style={ styles.bottomThird }>
      <View style={ styles.bottomThirdBox }>
        <Text>Third Box</Text>
      </View>
    </View>
  </View> 
  )
}