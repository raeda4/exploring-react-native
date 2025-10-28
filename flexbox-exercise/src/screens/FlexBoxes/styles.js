import { StyleSheet } from "react-native";

const stylesFn = () => {
    return StyleSheet.create({
        topThird: {
            flex: 1, 
            backgroundColor: 'red',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        topThirdBox: {
            height: 100, 
            width: 100, 
            backgroundColor: 'yellow',
            border: 'solid'
        }, 
        topThirdBackButton: {
            height: 50, 
            width: 100, 
            backgroundColor: 'gray',
            border: 'solid',
            alignSelf: 'center',
            justifySelf: 'end',
            alignItems: 'center',
            justifyContent: 'center'
        }, 
        midThird: { 
            flex: 1, 
            backgroundColor: 'pink', 
            justifyContent: 'center' 
        }, 
        midThirdBox: { 
            height: 150, 
            width: 150, 
            backgroundColor: 'purple', 
            alignSelf: 'center', 
            justifyContent: 'center', 
            alignItems: 'center',
            border: 'solid' 
        },
        bottomThird: { 
            flex: 1, 
            backgroundColor: 'blue', 
            justifyContent: 'end' 
        },
        bottomThirdBox: { 
            height: 125, 
            width: 125, 
            backgroundColor: 'green', 
            alignSelf: 'end', 
            alignItems: 'end', 
            justifyContent: 'end',
            border: 'solid' 
        }
    })
}

export default stylesFn