import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  Container,
  Content,
  View
} from "native-base";
import Nav from "../component/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "../component/Footer";
export default class Event extends Component {
  static navigationOptions = {
    headerShown: false
  };
  render() {
    return (
      <Container>
        <Nav />
        <Content>
          <Card>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("DetailScreen")}
            >
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        "https://i.pinimg.com/236x/e5/d0/ce/e5d0ce99bf43f5c0ab8127dc8fea858e.jpg"
                    }}
                  />
                  <Body>
                    <Text style={styles.text1}>Amazon REMARS Goes To Palu</Text>

                    <Text note style={styles.textNote}>
                      July.id
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      "https://remars.amazon.com/media/highlights/Jeff-Bezos-Fireside-Chat-Still-lg.jpg"
                  }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left style={styles.leftSide}>
                  <View style={{ flexDirection: "row" }}>
                    <Icon name="calendar" style={styles.date} />
                    <Text style={styles.textIcon}>Friday, 2020- 01 - 10</Text>
                  </View>
                  <View style={{ flexDirection: "row", paddingTop: 10 }}>
                    <Icon name="map-marker" style={styles.date} />
                    <Text style={styles.textIcon}> Jl Kihajar Dewantoro</Text>
                  </View>
                </Left>
                <Right>
                  <Text style={styles.textPrice}>( Rp 150.000 )</Text>

                  <Button style={styles.btnBook}>
                    <Text style={styles.textBook}>BOOK</Text>
                  </Button>
                </Right>
              </CardItem>
            </TouchableOpacity>
            <CardItem style={{ flex: 1 }}>
              <Text style={styles.textContent}>
                re:MARS is an AI event covering a diverse array of topics and
                themes related to Machine Learning, Automation, Robotics, and
                Space. The first year of re:MARS brought together thousands of
                business leaders and technical builders from more than 40
                countries for a truly unique event experience featuring speakers
                like Jeff Bezos, Robert Downey Jr., Andrew Ng, Kate Darling, and
                Marc Raibert, 100+ learning sessions, pioneering robotics demos
                that included a Mars rover, haptic robotic hands, and
                open-source prosthetic leg, workshops, and more. At re:MARS
                2020, attendees can once again expect to be inspired by industry
                luminaries, learn best practices on AI and ML applications for
                their organization, meet with Amazon technology experts, and
                immerse themselves in the latest emerging AI technology at the
                re:MARS Tech Showcase.
              </Text>
            </CardItem>
          </Card>
        </Content>
        <Footer navigation={this.props.navigation} />
      </Container>

      //section2
    );
  }
}

const styles = StyleSheet.create({
  text1: {
    color: "#616161",
    fontWeight: "bold"
  },
  textNote: {
    color: "#757575"
  },
  textIcon: {
    color: "#757575",
    marginLeft: 10
  },
  textBook: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  date: {
    color: "#616161",
    fontSize: 20,
    margin: 0
  },
  btnBook: {
    width: 100,
    backgroundColor: "#700000",
    justifyContent: "center"
  },
  leftSide: {
    flexDirection: "column"
  },
  textContent: {
    color: "#757575",
    textAlign: "justify"
  },
  textPrice: {
    color: "#700000",
    fontWeight: "bold",
    marginLeft: 20,
    paddingBottom: 10
  }
});
