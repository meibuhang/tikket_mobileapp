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
  View,
  Item
} from "native-base";
import Nav from "../component/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "../component/Footer";
import axios from "axios";
function getDayOfWeek(date) {
  let dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ][dayOfWeek];
}
export default class Event extends Component {
  static navigationOptions = {
    headerShown: false
  };
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const eventId = navigation.getParam("eventId");

    axios
      .get(`http://192.168.1.7:4500/api/dumbticket/category/event/${eventId}`)
      .then(res => {
        const event = res.data;
        this.setState({ data: event });
        //  console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const datas = this.state.data;
    return (
      <Container>
        <Nav />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: datas.user ? datas.user.image : ""
                  }}
                />
                <Body>
                  <Text style={styles.text1}>{this.state.data.name}</Text>

                  <Text note style={styles.textNote}>
                    {datas.user ? datas.user.fullname : ""}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri: this.state.data.image
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left style={styles.leftSide}>
                <View style={{ flexDirection: "row" }}>
                  <Icon name="calendar" style={styles.date} />
                  <Text style={styles.textIcon}>
                    {getDayOfWeek(datas.start_date)} , {datas.start_date}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                  <Icon name="map-marker" style={styles.date} />
                  <Text style={styles.textIcon}>At {datas.location}</Text>
                </View>
              </Left>
              <Right>
                <Text style={styles.textPrice}>(Rp {datas.price} )</Text>

                <Button style={styles.btnBook}>
                  <Text style={styles.textBook}>BOOK</Text>
                </Button>
              </Right>
            </CardItem>

            <CardItem style={{ flex: 1 }}>
              <Text style={styles.textContent}>{datas.detail_event}</Text>
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
    paddingBottom: 10,
    textAlign: "center"
  }
});
