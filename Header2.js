import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const onPressTitle = () => {
  console.log("title pressed");
};

const Header2 = () => {
  const titleText = useState("Bird's aa Nest");
  const bodyText = useState("This is not really a bird nest.");

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  }
});

export default Header2;
