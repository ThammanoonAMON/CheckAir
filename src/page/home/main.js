import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen 1 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    marginTop: 50,
    justifyContent: "center"
  }
});
