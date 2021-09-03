import { TextInput, Text, View, Image } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { getWeather } from "../api/api";
import WeatherResult from "../components/WeatherResult.js";
import Header from "../components/Header";
import { connect } from "react-redux";
import * as React from "react";
import { Button } from "react-native-elements";
import CitiesList from "../components/CitiesList";
import { useIsFocused } from "@react-navigation/native";
import styles from "../components/PageStyle";

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
  const isFocused = useIsFocused();

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
      {isFocused ? (
        <View style={{ flex: 5 }}>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              margin: 20,
            }}
            onChangeText={(text) => setCityNameInput(text)}
            placeholder="Cherchez une ville !"
          ></TextInput>
          <Button
            style={styles.button}
            icon={<Icon name="check" size={15} color="white" />}
            title="Lancer la recherche"
            onPress={() => loadWeather()}
          />
          {weather ? (
            <View>
              <WeatherResult weather={weather} />
              <Button
                style={styles.button}
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
      ) : (
        <Text>Unfocused</Text>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return state.weatherModel;
};

export default connect(mapStateToProps)(Search);
