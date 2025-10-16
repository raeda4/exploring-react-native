import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../features/Welcome";
import FlexBoxes from "../features/FlexBoxes";

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                />
                <Stack.Screen
                    name="FlexBoxes"
                    component={FlexBoxes}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation

// the name and the component need to match