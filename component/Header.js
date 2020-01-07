import React, { Component } from "react";

import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Icon
} from "native-base";

export default class Nav extends Component {
  static navigationOptions = {
    headerShown: false
  };
  render() {
    return (
      // <Container>
      <Header style={styles.container}>
        <Body>
          <Title style={styles.headerText}>Tik-Ket</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" style={{ color: "#700000" }} />
          </Button>
        </Right>
      </Header>
      // </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  },
  headerText: {
    fontSize: 25,
    color: "#700000",
    fontWeight: "bold",
    marginLeft: 20
  }
});
