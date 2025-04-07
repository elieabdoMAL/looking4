import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, useLocalSearchParams } from "expo-router";
import BackButton from "../../src/components/BackButton";
import colors from "../../src/styles/colors";

const Step1Name: React.FC = () => {
  const router = useRouter();

  const params = useLocalSearchParams<{
    email?: string;
    password?: string;
    provider?: string;
    token?: string;
  }>();
  console.log("Step1Name - Received params:", params);

  const { email, password } = params;
  const [name, setName] = useState("");

  const handleNext = () => {
    if (!name.trim()) {
      console.log("Name is empty, please fill it in");
      return;
    }
    console.log("Navigating to Step2Images with:", name, email, password);
    router.push({
      pathname: "../testSuccessfulPage",
      params: { userName: name, email, password },
    });
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={colors.gradient.colors}
      start={colors.gradient.start}
      end={colors.gradient.end}
    >
      <BackButton containerStyle={styles.backButton} />

      {/* Header with logo */}
      <View style={styles.headerContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>

      {/* Name Input Section */}
      <View style={styles.viewStyle}>
        <Text style={styles.headText}>
          Créez votre identité{"\n"}en 4 étapes simples
        </Text>
        <Text style={styles.containerText}>Votre nom Looking4</Text>
        <TextInput
          style={styles.input}
          placeholder="Mon nom..."
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Footer with progress image and next button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={handleNext}
        >
          <Text style={styles.createAccountButtonText}>Suivant</Text>
        </TouchableOpacity>
        <Image
          style={styles.progressImage}
          source={require("../../assets/Wizard/Progress1.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: "600",
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  createAccountButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    marginRight: 8,
  },
});

export default Step1Name;
