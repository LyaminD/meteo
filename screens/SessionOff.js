import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
