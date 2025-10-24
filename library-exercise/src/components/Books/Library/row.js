import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'


const Row = ({ item }) => {
    const { navigate } = useNavigation()

    return (
        <TouchableOpacity>
            <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
                <Text key={'id'}>ID: {item.id}</Text>
                <Text key={'fn'}>Title: {item.title}</Text>
                <Text key={'ln'}>Author: {item.author}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Row