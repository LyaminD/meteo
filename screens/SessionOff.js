import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../components/PageStyle";

const SessionOff = (props) => {
  const navigation = useNavigation();

  function deleteName() {
    dispatch({
      type: "nameModel/deleteName",
      payload: {
        name: "",
      },
    });
    navigation.navigate("Profil");
  }

  const { dispatch } = props;
  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity onPress={() => deleteName()} style={styles.button}>
        <Text style={styles.buttonText}>Se déconnecter !</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return state.nameModel;
};

export default connect(mapStateToProps)(SessionOff);
