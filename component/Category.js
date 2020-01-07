import React, { Component } from "react";
import { List, ListItem, Text } from "native-base";
import { StyleSheet } from "react-native";
export default class ListCategory extends Component {
  render() {
    return (
      //   <Container>
      //     <Header />
      //     <Content>
      <List>
        <ListItem>
          <Text style={styles.textCategory}>Healthy</Text>
        </ListItem>
        <ListItem>
          <Text style={styles.textCategory}>NetFlix</Text>
        </ListItem>
        <ListItem>
          <Text style={styles.textCategory}>Programming</Text>
        </ListItem>
      </List>
      //     </Content>
      //   </Container>
    );
  }
}
const styles = StyleSheet.create({
  textCategory: {
    color: "#757575"
  }
});
