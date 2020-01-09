import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  View
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
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
    axios
      .get(`http://192.168.1.7:4500/api/dumbticket/event/allevent`)
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
    return (
      //   <Container>
      //     <Content>

      <FlatList
        data={this.state.data.event}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Card>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("DetailScreen")}
              >
                <CardItem style={styles.Bgcards}>
                  <Left>
                    <Thumbnail
                      source={{
                        uri: item.user.image
                      }}
                    />
                    <Body>
                      <Text style={styles.text2}>{item.name}</Text>

                      <Text note style={styles.textNote}>
                        {item.user.fullname}
                      </Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri: item.image
                    }}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem style={styles.Bgcards}>
                  <Left>
                    <Button transparent>
                      <Icon name="calendar" style={styles.iconDate} />
                      <Text style={styles.textLikes}> {item.start_date}</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button style={styles.btnBook}>
                      <Text style={styles.text1}> Rp &nbsp;{item.price}</Text>
                    </Button>
                  </Right>
                </CardItem>
              </TouchableOpacity>
            </Card>

            {/* section 2 */}
          </View>
        )}
      />
      //section2
    );
  }
}

const styles = StyleSheet.create({
  Bgcards: {
    backgroundColor: "#ffffff"
  },
  text1: {
    color: "#ffffff",
    fontWeight: "bold"
  },
  text2: {
    color: "#700000",
    fontWeight: "bold"
  },
  textNote: {
    color: "#757575"
  },
  textLikes: {
    color: "#757575"
  },
  iconDate: {
    color: "#700000",
    fontSize: 20
  },
  btnBook: {
    width: 150,
    backgroundColor: "#700000",
    justifyContent: "center"
  }
});
