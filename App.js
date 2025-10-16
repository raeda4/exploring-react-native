import { View, Text } from 'react-native';
import StackNavigation from './src/navigation/stack';
import TabNavigation from './src/navigation/tabs';

export default function App() {
  return (
    //<StackNavigation />
    <TabNavigation />
  );
}

// I don't know why using LayoutStart works but flexBox --> It was because react components (exported functions have to start with a capital letter)