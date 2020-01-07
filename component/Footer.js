import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button
} from "native-base";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default class FooterTabsIconExample extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={styles.container}>
          <Button onPress={() => this.props.navigation.navigate("Home")}>
            <Icon name="home" style={styles.iconFooter} />
          </Button>
          <Button onPress={() => this.props.navigation.navigate("AddEvent")}>
            <Icon name="ticket" style={styles.iconFooter} />
          </Button>
          <Button>
            <Icon name="compass" style={styles.iconFooter} />
          </Button>
          <Button onPress={() => this.props.navigation.navigate("Profile")}>
            <Icon name="user" style={styles.iconFooter} />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  },
  headerText: {
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "bold",
    marginLeft: 20
  },
  iconFooter: {
    color: "#700000",
    fontSize: 30
  }
});
