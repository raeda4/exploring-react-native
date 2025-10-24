import { StyleSheet } from "react-native";

const stylesFn = () => {
    return StyleSheet.create({
        topThird: {
            flex: 1, 
            backgroundColor: 'red'
        },
        topThirdBox: {
            height: 100, 
            width: 100, 
            backgroundColor: 'yellow',
            border: 'solid'
        }, 
        midThird: { 
            flex: 1, 
            backgroundColor: 'gray', 
            justifyContent: 'center' 
        }, 
        midThirdBox: { 
            height: 100, 
            width: 200, 
            backgroundColor: 'orange', 
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
            height: 150, 
            width: 150, 
            backgroundColor: 'green', 
            alignSelf: 'end', // horizontally centers the self aka the green box
            alignItems: 'center',  // horizontally centers the child elements
            justifyContent: 'center', // vertically centers the child elements
            border: 'solid' 
        }
    })
}

export default stylesFn