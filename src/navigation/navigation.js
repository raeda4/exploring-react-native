import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@react-native-vector-icons/ionicons';
import Welcome from "../screens/Welcome";
import FlexBox1 from "../screens/FlexBoxes/FlexBox1";
import FlexBox2 from "../screens/FlexBoxes/FlexBox2";
import FlexBox3 from "../screens/FlexBoxes/FlexBox3";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Tab = createBottomTabNavigator();
const FlexBoxStackNav = createNativeStackNavigator();

function FlexBoxStackScreen() {
  return (
    <FlexBoxStackNav.Navigator>
      <FlexBoxStackNav.Screen
        name="First Flex Box"
        component={FlexBox1}
      />
      <FlexBoxStackNav.Screen
        name="Second Flex Box"
        component={FlexBox2}
      />
      <FlexBoxStackNav.Screen
        name="Third Flex Box"
        component={FlexBox3}
      />
    </FlexBoxStackNav.Navigator>
  )
}

const Navigation = () => {
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
        <Tab.Screen name="Flex Boxes" component={FlexBoxStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation


// I couldn't get the icons to work: https://ionic.io/ionicons
