import { createStackNavigator } from '@react-navigation/stack';
import Screen2 from '../screens/Screen2';
import { Screen1 } from '../screens/Screen1';


const Stack = createStackNavigator();

export const StackNavigation =()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options ={{title:'Mi Movil'}} component={Screen1} />
      <Stack.Screen name="creen2" options ={{title:'Mi Movil'}} component={Screen2} />
      
    </Stack.Navigator>
  );
}