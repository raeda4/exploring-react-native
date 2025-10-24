import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@react-native-vector-icons/ionicons';

import Welcome from "../screens/Welcome";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewBook from "../screens/Library/NewBook";
import LibraryScreen from "../screens/Library/Library";
import EditBook from "../screens/Library/EditBook";



const Tab = createBottomTabNavigator();
const WelcomeStackNav = createNativeStackNavigator();
const LibraryStackNav = createNativeStackNavigator();


function LibraryStackScreen() {
  return (
    <LibraryStackNav.Navigator>
      <LibraryStackNav.Screen
        name="Library"
        component={LibraryScreen}
      />
      <LibraryStackNav.Screen
        name="Add Book"
        component={NewBook}
      />
      <LibraryStackNav.Screen
        name="Edit Book"
        component={EditBook}
      />
    </LibraryStackNav.Navigator>
  )
}

function WelcomeStackScreen() {
  return (
    <WelcomeStackNav.Navigator>
      <WelcomeStackNav.Screen
        name="Welcome"
        component={Welcome}
      />
    </WelcomeStackNav.Navigator>
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
        <Tab.Screen 
          options={{ headerShown: false }} //removes the the tab banner screen name
          name="Welcome" 
          component={WelcomeStackScreen} 
        />
        <Tab.Screen 
          options={{ headerShown: false }} //removes the the tab banner screen name
          name="Library" 
          component={LibraryStackScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation


// I couldn't get the icons to work: https://ionic.io/ionicons
