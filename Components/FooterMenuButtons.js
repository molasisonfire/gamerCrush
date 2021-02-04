import React,{ useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button,TouchableHighlight, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ChatScreen from '../Screens/ChatScreen';

function FooterMenuBttons(){
    return <>
    <View style={styles.footer}>
    <Text>Btoes</Text>
        <View style={styles.playbutton}>
            <View style={styles.square}></View>
        </View>
    <Text>Btoes</Text>
    <Text>Btoes</Text>
    </View>
    </>;
}
const styles = StyleSheet.create({
    footer: {
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      borderBottomColor: 'rgb(249,249,249)',
      backgroundColor: 'rgb(255,255,255)',
    },
    playbutton: {
        position: 'absolute',
        borderRadius: 50,
        height:56,
        width: 56,
    },
    square : {
        position: 'absolute',
        left: 24.5,
        top: 25,
        height: 23,
        width: 23, 
    }
  });
export default FooterMenuBttons;