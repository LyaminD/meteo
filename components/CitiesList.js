import * as React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { connect } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { ListItem } from "react-native-elements";
import styles from "../components/PageStyle";

const CitiesList = (props) => {
  const townList = props.townList;
  const townWeather = props.townWeather;
  const isFocused = useIsFocused();
  const screenHeight = Dimensions.get("window").height;

  return (
    <View style={{ height: screenHeight, flex: 1 }}>
      <View style={{ flex: 5 }}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
          {props.cities.map((cityName, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{cityName}</ListItem.Title>
                <ListItem.Subtitle>
                  {props.townWeather[cityName].main.temp} °C /
                  {props.townWeather[cityName].main.temp_min} °C mini /
                  {props.townWeather[cityName].main.temp_max} °C maxi
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return state.weatherModel;
};

export default connect(mapStateToProps)(CitiesList);
