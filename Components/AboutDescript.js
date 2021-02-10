import React from 'react'
import { Text, View } from 'react-native'

class AboutDescript extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30 }}> Sobre mim </Text>
      </View>
    )
  }
}

export default AboutDescript