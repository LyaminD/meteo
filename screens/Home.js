import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getWeatherByLocation } from "../api/api";
import * as Location from "expo-location";
import Header from "../components/Header";
import { connect } from "react-redux";
import CitiesList from "../components/CitiesList";


const Home = (props) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [meteoLocation, setMeteoLocation] = useState(null);
  const { dispatch } = props;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let text = "Waiting..";
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        const lat = location.coords.latitude;
        const lon = location.coords.longitude;
        const weatherLocation = await getWeatherByLocation(lat, lon);
        setMeteoLocation(weatherLocation);
        dispatch({
          type: "weatherModel/getLocalWeather",
          payload: {
            latitude: lat,
            longitude: lon,
          },
        });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Image source={require(`../assets/meteo.jpg`)} style={styles.image} />
      {meteoLocation !== null ? (
        <View style={styles.container}>
          <Text style={styles.text}>
            {" "}
            La météo de votre journée à {meteoLocation.name} ! {"\n"}
            Aujourd'hui il fait :{meteoLocation.main.temp} degrés. {"\n"}
            avec un taux d'humidité de {meteoLocation.main.humidity} %{"\n"}
            Et nous avons un ciel :{meteoLocation.weather[0].description}
          </Text>
          <Image
            source={{
              uri: `http://openweathermap.org/img/w/${meteoLocation.weather[0].icon}.png`,
            }}
            style={styles.logo}
          />
        </View>
      ) : (
        <Text>
          Veuillez validez la géolocalisation pour afficher votre météo
        </Text>
      )}
      <Text>{props.cities[0]}</Text>
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

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    lineHeight: 30,
  },
  logo: {
    height: 100,
    width: 100,
    alignself: "center",
  },
});
