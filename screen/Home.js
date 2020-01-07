import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button, Container, Content } from "native-base";
import Nav from "../component/Header";
import Footer from "../component/Footer";
import Category from "../component/Category";
import Card from "../component/Card";
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { navigation } = this.props;
    return (
      <Container>
        <Nav />
        <Content>
          <Category />
          <ScrollView style={styles.cards}>
            <Card navigation={this.props.navigation} />
          </ScrollView>
        </Content>
        <Footer navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    marginTop: 20
  }
});
