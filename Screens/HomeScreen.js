import React, { useState, useEffect } from 'react';
import { Image, Button, Text, View, StatusBar, SafeAreaView, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderMenu from '../Components/HeaderMenu';
import FooterMenuBttons from '../Components/FooterMenuButtons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import data from '../data';

function HomeScreen({ navigation }) {
  var boleano = false;
  const [value, setValue] = useState(1);
  const [pessoaIndex,setIndex] = useState(0);

  const advancePessoa = () => setIndex(pessoaIndex+1);
  const backPessoa = () => setIndex(pessoaIndex-1);
  const incrementValue = () => setValue(value + 1);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}> {data[pessoaIndex].name}, {data[pessoaIndex].age}</Text>
          </View>

        </ScrollView>
      </SafeAreaView>

      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>

        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={backPessoa}
        >
          <Feather name="square" size={20} color="#FF69B4"></Feather>
        </TouchableHighlight>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <Image
          style={styles.images}
          source={{
            uri: data[pessoaIndex].image_one,
          }}
        />
        <Image
          style={styles.images}
          source={{
            uri: data[pessoaIndex].image_two,
          }}
        />
      </View>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
        >
          <Feather name="triangle" size={20} color="#90EE90"></Feather>
        </TouchableHighlight>

      </View>

      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
        >
          <Feather name="x" size={30} color="#4F8EF7"></Feather>
        </TouchableHighlight>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <Image
            style={styles.images}
            source={{
              uri: data[pessoaIndex].image_three,
            }}
          />
          <Image
            style={styles.images}
            source={{
              uri: data[pessoaIndex].image_four,
            }}
          />
        </View>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={advancePessoa}
        >
          <Entypo name="circle" size={30} color="#FF0000"></Entypo>
        </TouchableHighlight>
      </View>


    </>
  );
}
const styles = StyleSheet.create({
  tinyLogo: {
    width: 120,
    height: 100,
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'rgb(249,249,249)',
    backgroundColor: 'rgb(255,255,255)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 100,
  },
  images: {
    width: 120,
    height: 100,
  },
});

export default HomeScreen