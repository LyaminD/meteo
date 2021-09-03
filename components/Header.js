import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { Text } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import styles from "../components/PageStyle";

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
      <Image source={require(`../assets/meteo.jpg`)} style={styles.image} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return state.nameModel;
};

export default connect(mapStateToProps)(Header);
