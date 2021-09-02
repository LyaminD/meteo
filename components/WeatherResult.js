import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const WeatherResult = (props) => {
  if (props.weather.cod != "404") {
    const cityWeather = props.weather;
    const icon = cityWeather.weather[0].icon;

    return (
      <View style={styles.text}>
        <Text style= {styles.text}> La météo de votre journée !{"\n"}
        Aujourd'hui il fait : {cityWeather.main.temp} degrés. {"\n"}
        avec un taux d'humidité de {cityWeather.main.humidity} %{"\n"}
        Et nous avons un ciel :{cityWeather.weather[0].description}</Text>
        <Image
          source={{ uri: `http://openweathermap.org/img/w/${icon}.png` }}
          style={{ height: 100, width: 100 }}
        />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Nom de ville invalide</Text>
      </View>
    );
  }
};

export default WeatherResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    lineHeight: 30,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
