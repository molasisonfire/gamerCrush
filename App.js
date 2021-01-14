/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HeaderMenu from './Components/HeaderMenu';
import HomeScreen from './Screens/HomeScreen';
import TestScreen from './Screens/TestScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Header2 from './Header2';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Image,
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, 
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();
function HomeScreen2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const App: () => React$Node = () => {
  return (
    <NavigationContainer>{
      <Stack.Navigator initialRouteName="Home"
      options={{ headerTitle: props => <HeaderMenu {...props} /> }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}  />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerTitle: props => <HeaderMenu {...props} />, headerLeft : null  }}/>
        <Stack.Screen name="Test" component={TestScreen} options={{ headerTitle: props => <HeaderMenu {...props} />, headerLeft : null  }}/>
      </Stack.Navigator>
    }</NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  }
});

export default App;
