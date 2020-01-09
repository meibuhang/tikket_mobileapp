import React, { Component } from "react";
import { Text, Button } from "native-base";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import axios from "axios";

export default class ListCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://192.168.1.7:4500/api/dumbticket/category/allcategory`)
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
    return (
      <ScrollView
        horizontal
        style={{ marginTop: 30, paddingLeft: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {/* {this.state.data.map(value => { */}
        {/* return ( */}
        <FlatList
          horizontal
          data={this.state.data.category}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Button
              style={styles.scrollBtn}
              light
              onPress={() =>
                this.props.navigation.navigate("Profile", {
                  categoryId: item.id,
                  categoryName: item.name
                })
              }
            >
              <Text style={{ color: "black" }}>{item.name}</Text>
            </Button>
          )}
        />

        {/* );
        })} */}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textCategory: {
    color: "#757575"
  },
  scrollBtn: {
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderColor: "#616161",
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 10
  }
});
