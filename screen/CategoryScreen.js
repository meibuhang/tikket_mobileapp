import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import Nav from "../component/Header";
import Footer from "../component/Footer";
import {
  Container,
  Header,
  Content,
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
export default class CategoryScreen extends Component {
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
    const categoryId = navigation.getParam("categoryId");

    axios
      .get(
        `http://192.168.1.7:4500/api/dumbticket/category/${categoryId}/allevent`
      )
      .then(res => {
        const category = res.data;
        this.setState({ data: category });
        //  console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    // const datas = this.state.data.category;
    const { navigation } = this.props;
    const categoryName = navigation.getParam("categoryName");
    return (
      <Container>
        <Nav />
        <Content>
          <ScrollView style={styles.cards}>
            <View>
              <Button style={styles.scrollBtn} light>
                <Text style={styles.textEvent}>{categoryName}</Text>
              </Button>
            </View>
            <FlatList
              data={this.state.data.category}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                  <Card>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("DetailScreen", {
                          eventId: item.id,
                          eventName: item.name
                        })
                      }
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
                            <Text style={styles.textLikes}>
                              {" "}
                              {item.start_date}
                            </Text>
                          </Button>
                        </Left>
                        <Right>
                          <Button style={styles.btnBook}>
                            <Text style={styles.text1}>
                              {" "}
                              Rp &nbsp;{item.price}
                            </Text>
                          </Button>
                        </Right>
                      </CardItem>
                    </TouchableOpacity>
                  </Card>

                  {/* section 2 */}
                </View>
              )}
            />
          </ScrollView>
        </Content>
        <Footer navigation={this.props.navigation} />
      </Container>
      //section2
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    marginTop: 20
  },
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
  },
  textEvent: {
    fontSize: 10,
    color: "#ffffff",
    fontWeight: "bold",

    textAlign: "center"
  },
  scrollBtn: {
    backgroundColor: "#700000",

    borderRadius: 50,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    width: "30%",
    justifyContent: "center",
    alignItems: "center"
  }
});
