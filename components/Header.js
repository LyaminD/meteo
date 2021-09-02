import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";

const Header = () => {
  useEffect(() => {
    async function getName() {
      try {
        const name = await AsyncStorage.getItem("name");
        if (name !== null) {
          setName(name);
        }
      } catch (error) {}
    }
    getName();
  });

  const [userName, setName] = useState("");
  return (
    <View style={styles.header_style}>
      <Text style={{ textAlign: "center", color: "#fff", fontSize: 22 }}>
        {" "}
        Hello {userName}{" "}
      </Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return state.nameModel;
};

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header_style: {
    width: "100%",
    height: 45,
    backgroundColor: "#00BCD4",
    alignItems: "center",
    justifyContent: "center",
  },
});