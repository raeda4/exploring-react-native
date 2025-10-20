import { StyleSheet } from "react-native";

const stylesFn = () => {
    return StyleSheet.create({
        header: {
            flex: 1, 
            backgroundColor: 'grey',
            justifyContent: 'stretch'
        },
        container: {
            justifyContent: 'end'
        },
        storyButton: {
            border: 'solid',
            width: 150,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf:'end',
            justifySelf: 'end'
        },
        body: {
            flex: 2
        }
    })
}

export default stylesFn