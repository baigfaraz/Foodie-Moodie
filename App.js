import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontPage from './FrontPage';
import Login from './Login';
import EmailVerify from './EmailVerify';
import SignUp from './SignUp';
import Home from './Home';
import CreatePassword from './CreatePassword';
import AuthCode from './AuthCode';
import FoodCategory from './FoodCategory';
import Detail from './Detail';
import CounterApp from './counter';
import Search from './search';
import SearchResult from './SearchResult';
import CartScreen from './cart';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='FrontPage' component={FrontPage} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} /> */}
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        {/* <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='EmailVerify' component={EmailVerify} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='AuthCode' component={AuthCode} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='CreatePassword' component={CreatePassword} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='FoodCategory' component={FoodCategory} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='CounterApp' component={CounterApp} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='SearchResult' component={SearchResult} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='CartScreen' component={CartScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}