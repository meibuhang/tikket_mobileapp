import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Icon,
  DatePicker,
  Text
} from "native-base";

import { View, Image, TextInput, StyleSheet } from "react-native";
import Nav from "../component/Header";
import ImagePicker from "react-native-image-picker";
import Footer from "../component/Footer";
export default class FloatingLabelExample extends Component {
  constructor(props) {
    super(props);

    this.state = { selected2: undefined, chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  handleInputChange = text => {
    const filteredText = text.replace(/\D/gm, "");

    if (filteredText !== text) {
      // set state text to the current TextInput value, to trigger
      // TextInput update.
      this.setState({ text: text });

      // buys us some time until the above setState finish execution
      setTimeout(() => {
        this.setState(previousState => {
          return {
            ...previousState,
            text: previousState.text.replace(/\D/gm, "")
          };
        });
      }, 0);
    } else {
      this.setState({ text: filteredText });
    }
  };
  render() {
    return (
      <Container>
        <Nav />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input />
            </Item>
            <Item>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Programming" value="key0" />
                <Picker.Item label="Healthy" value="key1" />
                <Picker.Item label="Music" value="key2" />
                <Picker.Item label="Netflix" value="key3" />
                <Picker.Item label="KPOP" value="key4" />
              </Picker>
            </Item>
            <Item>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Start date"
                placeHolderTextStyle={{ color: "#757575" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Item>
            <Item>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="End date"
                placeHolderTextStyle={{ color: "#757575" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Item>
            <Item floatingLabel>
              <Label>Price</Label>
              <TextInput
                onChangeText={this.handleInputChange}
                value={this.state.text}
                underlineColorAndroid="transparent"
                autoCorrect={false}
                spellCheck={false}
                keyboardType="number-pad"
              />
            </Item>
            <Item>
              <Button style={styles.button}>
                <Icon name="images" style={styles.iconImage} />
                <Text style={styles.textImage}>Add Image</Text>
              </Button>
              <Label style={{ marginTop: 30, marginLeft: 20 }}>
                Image Name...
              </Label>
            </Item>
            <Item floatingLabel>
              <Label>Description</Label>
              <Input />
            </Item>
            <Button style={styles.btnSend}>
              <Text style={styles.textSend}>Add Image</Text>
            </Button>
          </Form>
        </Content>
        <Footer navigation={this.props.navigation} />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "red",
    marginTop: 10
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "70%",
    height: 280,
    marginTop: 50
  },
  button: {
    width: "50%",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#700000"
  },
  previewImage: {
    width: "100%",
    height: "100%"
  },
  textImage: {
    textAlign: "left"
  },
  iconImage: {
    color: "#ffffff",
    justifyContent: "center"
  },
  btnSend: {
    backgroundColor: "#000000",
    width: "50%",
    marginLeft: 80,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  textSend: {
    textAlign: "center"
  }
});
