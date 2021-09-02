import { TextInput, StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { getWeather } from "../api/api";
import WeatherResult from "../components/WeatherResult.js";
import Header from "../components/Header";
import { connect } from "react-redux";
import * as React from "react";
import { Button } from "react-native-elements";
import CitiesList from "../components/CitiesList";

const Search = (props) => {
  function addToFavoriteCities() {
    dispatch({
      type: "weatherModel/addCityAndWeather",
      payload: {
        cityName: cityNameInput,
      },
    });
  }

  const [cityNameInput, setCityNameInput] = useState("");
  const { dispatch } = props;
  const [weather, setWeather] = useState(null);

  async function loadWeather() {
    if (cityNameInput.length > 0) {
      const response = await getWeather(cityNameInput);
      if (response) {
        setWeather(response);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <Image source={require(`../assets/meteo.jpg`)} style={styles.image} />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, margin: 20 }}
        onChangeText={(text) => setCityNameInput(text)}
        placeholder="Cherchez une ville !"
      ></TextInput>
      <Button
        icon={<Icon name="check" size={15} color="white" />}
        title="Lancer la recherche"
        onPress={() => loadWeather()}
      />
      {weather ? (
        <View>
          <WeatherResult weather={weather} />
          <Button
            icon={<Icon name="plus-square" size={15} color="white" />}
            title="Ajouter aux favoris"
            onPress={() => addToFavoriteCities()}
          />
        </View>
      ) : (
        <Text>{"\n"}Aucunes villes séléctionée.</Text>
      )}
      <CitiesList
        townList={props.cities}
        townWeather={props.citiesInformations}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return state.weatherModel;
};

export default connect(mapStateToProps)(Search);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 70,
    width: "100%",
  },
});
