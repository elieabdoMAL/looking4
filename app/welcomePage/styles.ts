// app/WelcomePage/styles.ts
import { StyleSheet } from "react-native";
import Colors from "../../src/styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 0,
    marginTop: 0,
    height: "100%",
  },

  /* HEADER */
  headerContainer: {
    alignItems: "center",
    marginTop: 0,
    padding: 0,
  },
  logo: {
    width: 184,
    height: 89,
    marginBottom: 10,
    resizeMode: "contain",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
  },
  highlight: {
    color: Colors.black,
    letterSpacing: 1.4,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.black,
  },

  /* GRID SECTION */
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridItem1: {
    width: "60%",
    marginBottom: 0,
    justifyContent: "center",
    alignItems: "baseline",
    flexWrap: "wrap",
  },
  gridItem2: {
    width: "40%",
    marginTop: 40,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  gridItem3: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  normalText: {
    fontWeight: "400",
    color: Colors.white,
    fontSize: 28,
  },
  boldText: {
    fontWeight: "bold",
    color: Colors.white,
    fontSize: 28,
  },
  gridItemText: {
    fontSize: 14,
    marginBottom: 5,
    textTransform: "uppercase",
    color: Colors.white, // default text color
  },
  gridItem4: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem5: {
    marginTop: 15,
    width: "40%",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  /* BUTTONS */
  buttonContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: Colors.black,
    paddingVertical: 15,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  loginButtonText: {
    color: Colors.white,
    fontSize: 22,
    textTransform: "uppercase",
  },
  registerButton: {
    borderWidth: 2,
    borderColor: Colors.white,
    paddingVertical: 15,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  registerButtonText: {
    color: Colors.white,
    fontSize: 22,
    textTransform: "uppercase",
  },
});
