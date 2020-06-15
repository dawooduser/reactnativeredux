import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Sidebar from '../drawableContent';
import Home from '../authorized Pages/home';
import SignIn from '../unauthorized/signin';
import Welcome from '../unauthorized/welcome';
import Dashboard from '../authorized Pages/dashboard';
import AddClient from '../authorized Pages/addclient';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class Mydrawer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <Sidebar {...props} />}
          initialRouteName="AddClient">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="AddClient" component={AddClient} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default class MyStack extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Welcome">
          <Stack.Screen name="Mydrawer" component={Mydrawer} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Welcome" component={Welcome} />
          {/* <Stack.Screen name="forgotPwd" component={forgotPwd} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// const Drawer = createDrawerNavigator(
//   {
//     Home,
//     SignIn,
//     Dashboard,
//     AddClient,
//   },
//   {
//     initialRouteName: 'AddClient',
//     unmountInactiveRoutes: true,
//     headerMode: 'none',
//     contentComponent: (props) => <Sidebar {...props} />,
//   },
// );

// const AppNavigator = createStackNavigator(
//   {
//     Drawer,
//   },
//   {
//     initialRouteName: 'Drawer',
//     headerMode: 'none',
//     unmountInactiveRoutes: true,
//   },
// );
// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {
//   render() {
//     return <Drawer />;
//   }
// }
