import React, { useState } from 'react';
import HeaderMenu from '../Components/HeaderMenu'
import { Button, Text, View, StatusBar, SafeAreaView, ScrollView, StyleSheet,TouchableHighlight } from 'react-native'
import TextChat from '../Components/TextChat';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Chat from '../Components/Chat';

function ChatScreen({ navigation }) {
  const [showChat, setShowChat] = useState('0');
  const chatClick = (name) => {
    setShowChat(name);
  };

  const array = [{
    name: 'Sayuri',
    message: 'Hey sweetie!',
    timestamp: '40 seconds ago',
    profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopG1iL9JgDgKbLohG7D0Ij6--GoTzvk0cDA&usqp=CAU',
  }, {
    name: 'Masami Nagasawa',
    message: 'Hey sweetieee!',
    timestamp: '40 seconds ago',
    profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9BO-i-Q3j8mWZ4-nTXS7_AlhSO7eGRSVpw&usqp=CAU',
  }, {
    name: 'Mao Inoue',
    message: 'Hiya sweetie!',
    timestamp: '40 seconds ago',
    profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1VMLnJUMyn2cR0SRB-E2F58W-4Mrap_9kA&usqp=CAU',
  }];

  return (
    <>
    {showChat == 0 ?
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {array.map(contatinho => {
            return (<View>
              <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => chatClick(contatinho.name)}
              >
                <Chat name={contatinho.name}
              message={contatinho.message}
              timestamp={contatinho.timestamp}
              profilePic={contatinho.profilePic}>
              </Chat>
              </TouchableHighlight>
              <View>
                </View>
                
                </View>)
          })}
        </ScrollView>
      </SafeAreaView>
      </View>
      :
      <TextChat></TextChat>
      
      }
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default ChatScreen