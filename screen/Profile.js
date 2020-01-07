import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "native-base";

export default class Profile extends Component {
  static navigationOptions = {
    headerShown: false
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },
  welcomeText: {
    fontSize: 50,
    color: "#ffffff",
    fontWeight: "bold"
  },
  brandTag: {
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "normal"
  },

  startedButton: {
    marginTop: 20,
    width: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  text1: {
    color: "#616161"
  }
});
