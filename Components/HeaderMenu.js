import React,{ useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button,TouchableHighlight, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-deck-swiper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ChatScreen from '../Screens/ChatScreen';

function HeaderMenu(){
  const [value,setValue] = useState(1);
  const goToProfile = () => setValue(1);
  const goToHome = () => setValue(2);
  const goToChat = () => setValue(3);

  if(value == 1){
    return (
      <>
      <View style={styles.header}>

        <TouchableHighlight    
        activeOpacity={0.6}
        underlayColor="#DDDDDD" 
        onPress={goToProfile}>
        <Icon name="ios-person" size={30} color="#4F8EF7" />
        </TouchableHighlight>
        <TouchableHighlight 
        activeOpacity={0.6}
        underlayColor="#DDDDDD" 
        onPress={goToHome}>
        <Image source={{uri: 'data:image/png;base64,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'}}
       style={{width: 90, height: 40}} />
       </TouchableHighlight>
       <TouchableHighlight 
        activeOpacity={0.6}
        underlayColor="#DDDDDD"        
        onPress={goToChat}>
        <FontAwesome5 name={'comments'} size={30} color="#4F8EF7" />
        </TouchableHighlight>
      </View>
      <ProfileScreen></ProfileScreen>
      </>
    )
  }else if(value == 2){
    return (
      <>
      <View style={styles.header}>

        <TouchableHighlight    
        activeOpacity={0.6}
        underlayColor="#DDDDDD" 
        onPress={goToProfile}>
        <Icon name="ios-person" size={30} color="#4F8EF7" />
        </TouchableHighlight>
        <TouchableHighlight 
        activeOpacity={0.6}
        underlayColor="#DDDDDD" 
        onPress={goToHome}>
        <Image source={{uri: 'data:image/png;base64,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'}}
       style={{width: 90, height: 40}} />
       </TouchableHighlight>
       <TouchableHighlight 
        activeOpacity={0.6}
        underlayColor="#DDDDDD"        
        onPress={goToChat}>
        <FontAwesome5 name={'comments'} size={30} color="#4F8EF7" />
        </TouchableHighlight>
      </View>
      <HomeScreen></HomeScreen>
      </>
    )
  }else{
    return (
      <>
      <View style={styles.header}>

        <TouchableHighlight    
        activeOpacity={0.6}
        underlayColor="#DDDDDD" 
        onPress={goToProfile}>
        <Icon name="ios-person" size={30} color="#4F8EF7" />
        </TouchableHighlight>
        <TouchableHighlight 
        activeOpacity={0.6}
        underlayColor="#DDDDDD" 
        onPress={goToHome}>
        <Image source={{uri: 'data:image/png;base64,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'}}
       style={{width: 90, height: 40}} />
       </TouchableHighlight>
       <TouchableHighlight 
        activeOpacity={0.6}
        underlayColor="#DDDDDD"        
        onPress={goToChat}>
        <FontAwesome5 name={'comments'} size={30} color="#4F8EF7" />
        </TouchableHighlight>
      </View>
      <ChatScreen></ChatScreen>
      </>
    )
  }
  

}

const styles = StyleSheet.create({
    header:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      borderBottomColor: 'rgb(249,249,249)',
      backgroundColor: 'rgb(255,255,255)',
    },
    header_logo:{
        height:'40px',
        resizeMode: 'contain',
        width: '90px',
    },
    header_icon:{
        padding: '20px',
    }
  });

export default HeaderMenu