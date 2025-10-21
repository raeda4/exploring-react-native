import { StyleSheet } from "react-native";

const stylesFn = () => {
    return StyleSheet.create({
        header: {
            flex: 1, 
            border: 'solid',
            justifyContent: 'space-between'
        },
        container: {
            justifyContent: 'end'
        },
        textField: { 
            borderWidth: 1, 
            borderColor: 'black', 
            borderRadius: 4, 
            padding: 10,
            margin: 15
        },
        storyButton: {
            border: 'solid',
            width: 150,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf:'end',
            justifySelf: 'end',
            margin: 15,
            borderRadius: 4
        },
        body: {
            flex: 2
        },
        storyText: {
            
        },
        textBox: {
            padding: 10
        }
    })
}

export default stylesFn