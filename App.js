import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePage from './src/Pages/WelcomePage/WelcomePage';
import UserPage from './src/Pages/UserPage/UserPage';
import TestPage from './src/Pages/TestPage/TestPage';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();
function LogoTitle() {
  return <Text>LOGO TITLE</Text>;
}
// function Home() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={Feed} />
//       <Tab.Screen name="Messages" component={Messages} />
//     </Tab.Navigator>
//   );
// }
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen
          name="UserPage"
          component={UserPage}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
          }}
        />
        <Stack.Screen name="TestPage" component={TestPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
