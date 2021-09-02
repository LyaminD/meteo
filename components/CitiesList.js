import * as React from "react";
import { ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import { SafeAreaView, Dimensions , View} from "react-native";
import Modal from "../components/Modal";

const CitiesList = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ height: screenHeight }}>
        <ScrollView>
          {props.townList.map((city) => (
            <ListItem key={props.townWeather[city].id}>
              <Text>{props.townWeather[city]}</Text>
            </ListItem>
          ))}
          <Modal/>
        </ScrollView>
      </SafeAreaView>
      <Text>{props.townWeather.id}</Text>
    </View>
  );
};
const screenHeight = Dimensions.get("window").height;
const mapStateToProps = (state) => {
  return state.weatherModel;
};

export default connect(mapStateToProps)(CitiesList);
