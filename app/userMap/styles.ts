// app/userMap/styles.ts
import { StyleSheet, Dimensions } from "react-native";
import colors from "../../src/styles/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    position: "relative",
  },

  // Map Styling
  mapContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  mapWrapper: {
    width: "100%",
    height: windowHeight - 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: "hidden",
    marginBottom: 10,
  },

  map: {
    width: "100%",
    height: "100%", // Full height minus bottom nav
  },
  userMarkerContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  userMarker: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  friendMarker: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },

  // Search Bar Styling
  searchBarOverlay: {
    position: "absolute",
    top: 29,
    alignItems: "center",
    zIndex: 10,
    width: "90%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  searchBarContainer: {
    width: "90%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.black,
    borderRadius: 50,
    paddingHorizontal: 15,
  },
  logo: {
    width: 40,
    height: 40,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 50,
    color: colors.black,
    fontWeight: "bold",
    paddingLeft: 15,
    fontFamily: "Poppins",
    fontSize: 16,
  },

  searchText: {
    color: "#ACACAC",
    fontFamily: "Poppins",
    fontSize: 18,
    marginLeft: 22,
  },
  searchIcon: {
    width: 60,
    height: 60,
  },

  // Map Controls Styling
  mapControlsContainer: {
    position: "absolute",
    bottom: 75, // Positioned above bottom nav
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mapControlButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  controlIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  positionButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  positionIconContainer: {
    width: 30,
    height: 30,
  },
  positionIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  // Bottom Navigation
  bottomNav: {
    height: 50,
    width: windowWidth,
    backgroundColor: colors.black,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignContent: "center",
    zIndex: 10,
    alignItems: "center",
  },
  navButton: {
    justifyContent: "center",
    height: "100%",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.white,
    resizeMode: "cover",
  },
  navIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
});
