import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@react-native-vector-icons/ionicons';
import WelcomeScreen from "../screens/Welcome";
import FlexBoxesScreen from "../screens/FlexBoxes";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === "Details") {
              iconName = "ios-analytics";
            } else if (route.name === "WelcomeScreen") {
              iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={"earth-outline"} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Tab.Screen name="FlexBoxesScreen" component={FlexBoxesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation


// I couldn't get the icons to work: https://ionic.io/ionicons
