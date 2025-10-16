import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@react-native-vector-icons/ionicons';
import Welcome from "../screens/Welcome";
import FlexBoxes from "../screens/FlexBoxes";

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
            } else if (route.name === "Welcome") {
              iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={"earth-outline"} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="FlexBoxes" component={FlexBoxes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation


// I couldn't get the icons to work: https://ionic.io/ionicons
