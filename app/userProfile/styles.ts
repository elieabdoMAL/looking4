import { StyleSheet } from "react-native";
import colors from "../../src/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 999,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  backButtonSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  spacer: {
    flex: 1,
  },
  userFullName: {
    color: "#999",
    fontSize: 18,
    marginRight: 10,
  },
  iconBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    marginBottom: 20,
  },
  topIcon: {
    width: 22,
    height: 22,
    marginHorizontal: 10,
  },
  mainImageContainer: {
    alignSelf: "center",
    width: "90%",
    aspectRatio: 1,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    resizeMode: "cover",
  },
  mainImagePlaceholder: {
    width: 80,
    height: 80,
    tintColor: colors.black,
  },
  crownIcon: {
    position: "absolute",
    top: 15,
    left: 15,
    width: 22,
    height: 18,
  },
  thumbnailsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  thumbnailContainer: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#F0F0F0",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  thumbnailPlaceholder: {
    width: 30,
    height: 30,
    tintColor: colors.black,
  },
  descriptionLabel: {
    fontSize: 18,
    color: colors.black,
    marginLeft: 10,
    marginBottom: 8,
  },
  descriptionInput: {
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 100,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    textAlignVertical: "top",
    fontSize: 14,
  },
  locationLabel: {
    fontSize: 18,
    color: colors.black,
    marginLeft: 10,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 30,
  },
  locationIconContainer: {
    backgroundColor: colors.black,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  locationIcon: {
    width: 46,
    height: 46,
    tintColor: colors.white,
  },
  locationInput: {
    flex: 1,
    height: 50,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 14,
    justifyContent: "center",
  },
});

export const popupStyles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: "center",
  },
  popupBackground: {
    flex: 1,
  },
  popupScroll: {
    flex: 1,
  },
  popupWrapper: {
    marginHorizontal: 6,
    flex: 1,
  },
  popupContent: {
    flexDirection: "column",
    marginHorizontal: 3,
  },
  logoContainer: {
    alignItems: "center",
  },
  logoImage: {
    width: 138,
    height: 150,
  },
  blackBox: {
    backgroundColor: "#000",
    borderRadius: 25,
    paddingTop: 83,
    paddingBottom: 24,
    marginTop: 20,
  },
  optionContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  optionTitle: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
  optionBox: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 26,
    paddingBottom: 14,
    marginBottom: 13,
    marginHorizontal: 30,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    elevation: 6,
  },
  optionBoxTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 1,
    marginLeft: 20,
  },
  optionBoxSubtitle: {
    color: "#fff",
    fontSize: 13,
    marginHorizontal: 19,
  },
  shareRow: {
    alignItems: "center",
    marginBottom: 1,
  },
  centeredView: {
    alignItems: "center",
  },
  hideMeText: {
    color: "#fff",
    fontSize: 14,
  },
  closeArea: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

// add a dummy default export so Expo Router won’t try to treat this file as a page
export default { styles, popupStyles };
