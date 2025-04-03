// screens/Signupwizard/Step1Name/styles.ts
import { StyleSheet } from "react-native";
import colors from "../../../src/styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 999,
  },

  headerContainer: {
    alignItems: "center",
    marginTop: 77,
  },
  logo: {
    width: 184,
    height: 79,
    marginBottom: 30,
    resizeMode: "contain",
  },

  viewStyle: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  headText: {
    fontSize: 26,
    color: colors.white,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: 600,
    lineHeight: 34,
  },
  containerText: {
    fontSize: 14,
    color: colors.black,
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: 30,
  },
  input: {
    width: 357,
    height: 71,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 14,
    // Example shadow for iOS + Android:
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },

  footer: {
    position: "absolute",
    bottom: 20,
    left: 30,
    right: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressImage: {
    width: "100%",
    height: 20,
    resizeMode: "contain",
    marginBottom: 15,
  },
  createAccountButton: {
    width: 203,
    height: 62,
    marginBottom: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 31,
    backgroundColor: "#6FB6CF",
    borderColor: "#79CEEC",
    borderWidth: 3,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25, // ~ #00000040
    shadowRadius: 4,

    // Android elevation
    elevation: 4,
  },

  createAccountButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    marginRight: 8,
  },
});
