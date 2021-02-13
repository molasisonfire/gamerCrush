import React, { useState, useEffect } from 'react';
import { Modal, Image, Button, Text, View, StatusBar, SafeAreaView, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import data from '../data';
import AboutDescript from '../Components/AboutDescript'
import ImageViewer from 'react-native-image-zoom-viewer';

function HomeScreen({ navigation }) {
  var boleano = false;
  const [value, setValue] = useState(1);
  const [pessoaIndex, setIndex] = useState(0);
  const [show, setShow] = useState(0);
  const [imageShow, setImageShow] = useState(false);

  const imageClick = () => {
    setImageShow(true);
  };
  const imageClose = () => {
    setImageShow(false);
  };
  const swapAnimation = () => {
    if (show == 0) {
      setShow(1);
      setTimeout(() => setShow(0), 0.6);
    }
  };

  const advancePessoa = () => {
    setIndex(pessoaIndex + 1)
    if (show == 0) {
      setShow(1);
      setTimeout(() => setShow(0), 600);
    }
  };
  const negatePessoa = () => {
    setIndex(pessoaIndex + 1)
    if (show == 0) {
      setShow(2);
      setTimeout(() => setShow(0), 600);
    }
  };
  const backPessoa = () => {
    setIndex(pessoaIndex - 1)
    if (show == 0) {
      setShow(3);
      setTimeout(() => setShow(0), 600);
    }
  };
  const incrementValue = () => setValue(value + 1);

  const images = [{

    url: data[pessoaIndex].image_one,

    props: {
    }
  }, {
    url: data[pessoaIndex].image_two,
    props: {
    }
  }, {
    url: data[pessoaIndex].image_three,
    props: {
    }
  }, {
    url: data[pessoaIndex].image_four,
    props: {
    }
  }


  ]

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>{data[pessoaIndex].name}, {data[pessoaIndex].age}</Text>
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
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={imageClick}>
            <Image
              style={styles.images}
              source={{
                uri: data[pessoaIndex].image_one,
              }}
            />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={imageClick}>
            <Image
              style={styles.images}
              source={{
                uri: data[pessoaIndex].image_two,
              }}
            />
          </TouchableHighlight>
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
          onPress={negatePessoa}
        >
          <Feather name="x" size={30} color="#4F8EF7"></Feather>
        </TouchableHighlight>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={imageClick}>
            <Image
              style={styles.images}
              source={{
                uri: data[pessoaIndex].image_three,
              }}
            />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={imageClick}>
            <Image
              style={styles.images}
              source={{
                uri: data[pessoaIndex].image_four,
              }}
            />
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={advancePessoa}
        >
          <Entypo name="circle" size={30} color="#FF0000"></Entypo>
        </TouchableHighlight>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        {(show == 1) ?
          <AntDesign name="hearto" size={30} color="#FF0000"></AntDesign> : <View></View>
        }
        {(show == 2) ?
          <Entypo name="emoji-sad" size={30} color="#FF0000"></Entypo> : <View></View>
        }
        {(show == 3) ?
          <AntDesign name="reload1" size={30} color="#FF0000"></AntDesign> : <View></View>
        }
      </View>
      <AboutDescript></AboutDescript>
      {(imageShow) ?

          <Modal visible={true} transparent={true} onRequestClose={imageClose}>
            <ImageViewer imageUrls={images}  />
          </Modal>
        :
        <View></View>}
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