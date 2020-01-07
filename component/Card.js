import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View
} from "native-base";

export default class Event extends Component {
  static navigationOptions = {
    headerShown: false
  };
  render() {
    return (
      //   <Container>
      //     <Content>
      <View>
        <Card>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DetailScreen")}
          >
            <CardItem style={styles.Bgcards}>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://i.pinimg.com/236x/e5/d0/ce/e5d0ce99bf43f5c0ab8127dc8fea858e.jpg"
                  }}
                />
                <Body>
                  <Text style={styles.text2}>Amazon REMARS Goes To Palu</Text>

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
            <CardItem style={styles.Bgcards}>
              <Left>
                <Button transparent>
                  <Icon name="heart" style={styles.iconLove} />
                  <Text style={styles.textLikes}>12 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Button style={styles.btnBook}>
                  <Text style={styles.text1}>Rp 150.000</Text>
                </Button>
              </Right>
            </CardItem>
          </TouchableOpacity>
        </Card>

        {/* section 2 */}
        <Card>
          <CardItem style={styles.Bgcards}>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://i.pinimg.com/236x/e5/d0/ce/e5d0ce99bf43f5c0ab8127dc8fea858e.jpg"
                }}
              />
              <Body>
                <Text style={styles.text2}>Harry Potter</Text>
                <Text note style={styles.textNote}>
                  July.id
                </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri: "https://wallpaperplay.com/walls/full/0/0/9/64773.jpg"
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem style={styles.Bgcards}>
            <Left>
              <Button transparent>
                <Icon name="heart" style={styles.iconLove} />
                <Text style={styles.textLikes}>25 Likes</Text>
              </Button>
            </Left>
            <Right>
              <Button style={styles.btnBook}>
                <Text style={styles.text1}>Rp 70.000</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </View>

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
  iconLove: {
    color: "#700000",
    fontSize: 35
  },
  btnBook: {
    width: 150,
    backgroundColor: "#700000",
    justifyContent: "center"
  }
});
