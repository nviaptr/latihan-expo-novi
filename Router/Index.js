import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Galerry" component={Gallery} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}