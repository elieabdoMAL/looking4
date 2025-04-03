import { StyleSheet } from "react-native";
import colors from "../../src/styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
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
  },

  input: {
    width: "100%",
    height: 42,
    backgroundColor: colors.white,
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 20,
    fontSize: 14,
    // If you want all caps placeholders, you can set `textTransform` on the placeholder if needed
  },

  containerText: { fontSize: 14, fontWeight: 400 },

  createAccountButton: {
    borderWidth: 2,
    borderColor: colors.white,
    paddingVertical: 15,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  createAccountButtonText: {
    color: colors.white,
    fontSize: 22,
    textTransform: "uppercase",
  },
  socialButton: {
    width: "100%",
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  socialButtonText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "500",
  },
});
