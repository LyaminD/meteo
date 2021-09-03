import React, { useState } from "react";
import { View, TextInput, Image } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../components/Header";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styles from "../components/PageStyle";

const User = (props) => {
  const navigation = useNavigation();
  function _storeData() {
    dispatch({
      type: "nameModel/storeName",
      payload: {
        userName: userNameInput,
      },
    });
    navigation.navigate("Accueil");
  }

  const [userNameInput, setUserNameInput] = useState("");
  const { dispatch } = props;

  return (
    <View style={styles.container}>
      <Header />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, margin: 20 }}
        onChangeText={(text) => setUserNameInput(text)}
        placeholder="Changer votre nom"
      ></TextInput>
      <Button
        icon={<Icon name="check" size={15} color="white" />}
        title="Changer votre nom"
        onPress={() => _storeData()}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return state.nameModel;
};

export default connect(mapStateToProps)(User);
