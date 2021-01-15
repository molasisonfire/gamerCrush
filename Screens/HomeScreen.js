import React from 'react'
import { Button,Text, View,StatusBar,SafeAreaView,ScrollView,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderMenu from '../Components/HeaderMenu';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function HomeScreen({ navigation }) {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <HeaderMenu navegacao={navigation}></HeaderMenu>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Profile')}
      />
    
    </View>

      </ScrollView>
    </SafeAreaView>
    </>
  );
}
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

export default HomeScreen