import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 100,
  },

  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    paddingBottom: 50,
    flex: 1,
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },

  scrollView: {
    height: "20%",
    width: "80%",
    margin: 20,
    alignSelf: "center",
    padding: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "lightblue",
  },

  text: {
    lineHeight: 30,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  header_style: {
    width: "100%",
    backgroundColor: "#00BCD4",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },

  ville: {
    color: "#47B1E1",
    fontWeight: "bold",
  },

  image: {
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    height: 100,
    width: 100,
    alignself: "center",
  },

  button: {
    height: 40,
    width: "80%",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
