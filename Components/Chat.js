import * as React from "react";
import {Text, View,StyleSheet, Image, UseState } from 'react-native';


function Chat({name,message,profilePic,timestamp}){
    return (
    <>

    <View style={styles.chat}>
        <Image Image source={{ uri:profilePic }} style={styles.profileImg} ></Image>
        <View style={styles.chat_details}>
            <Text style={styles.contact_info_name}>{name}</Text>
            <Text style={styles.contact_info_text}>{message}</Text>
        </View>
        <Text style={styles.chat_timestamp}>{timestamp}</Text>
    </View>
    </>
    );
}

const styles = StyleSheet.create({
    chat:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      borderBottomColor: '#fafafa',
      backgroundColor: '#fafafa',
      padding:10 ,
      height:90,
    },
    chat_details:{
        flex: 1,
    },
    chat_timestamp:{
        color: 'rgb(211,211,211)',
    },
    profileImg: {
        height: 50,
        width: 50,
        borderRadius: 40,
    },
    contact_info_name:{
       left: 15,
       fontWeight: 'bold'
    },
    contact_info_text:{
        left: 15,
        
     },
  });

export default Chat;