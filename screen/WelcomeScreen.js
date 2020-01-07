import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Button } from "native-base";
export default class WelcomeScreen extends Component {
  static navigationOptions = {
    headerShown: false
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../image/bird-s-eye-view-of-city-during-dawn-2834219.jpg")}
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={styles.welcomeText}>Tik-Ket</Text>
          <Text style={styles.brandTag}>
            Get Your Ticket Anytime & Anywhere
          </Text>
          <View>
            <Button
              Rounded
              light
              style={styles.startedButton}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={styles.text1}>Getting Started</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
    alignItems: "center",
    borderRadius: 50
  },
  text1: {
    color: "#616161"
  }
});
