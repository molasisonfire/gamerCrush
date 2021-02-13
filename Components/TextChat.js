import React, { useState } from 'react';
import {Text, View,StyleSheet, Image, TextInput, Button } from 'react-native';


function TextChat(){
    const [input,setInput] = useState("");
    const [messages,setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://s2.glbimg.com/MLxTbVdLCTIjaJTKpop90yZx29c=/top/e.glbimg.com/og/ed/f/original/2020/03/30/ellen-rocche.png',
            message: 'Whats up'
        },
        {
            name: 'Ellen',
            image: 'https://s2.glbimg.com/MLxTbVdLCTIjaJTKpop90yZx29c=/top/e.glbimg.com/og/ed/f/original/2020/03/30/ellen-rocche.png',
            message: 'How it is going'
        },
        {
            message: 'Nice!'
        },
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput("");
    }
    return (
        <View >
        <Text>MATCHED SINCE 2000</Text>
        {messages.map(  message => (
            message.name ? (               
            <View>

                <Text>{message.message}</Text>
            </View> 
            ) : (
            <View>
                <Text >{message.message}</Text>
            </View>
            )
        ))}

        
        <TextInput       style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText("text")}
      value={'teste'}></TextInput>
          <Button
      title="Send"
    />
    </View>);
}

export default TextChat;