import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, useLocalSearchParams } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import config from "../../src/utils/config";
import BackButton from "../../src/components/BackButton";
import colors from "../../src/styles/colors";

const Step5Location: React.FC = () => {
  const router = useRouter();

  // Retrieve signup parameters from the previous steps
  const { userName, images, description, keywords, email, password } =
    useLocalSearchParams<{
      userName?: string;
      images?: string[];
      description?: string;
      keywords?: string;
      email?: string;
      password?: string;
    }>();

  // selectedLocation will be used to let the user choose how to share location
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handlePublish = async () => {
    if (!selectedLocation) {
      Alert.alert(
        "Sélection requise",
        "Veuillez choisir une option de localisation."
      );
      return;
    }

    // Build payload to sign up; if your API expects the location, add it here.
    const payload = {
      name: userName,
      description: description,
      phone: "12314112231",
      email: email,
      password: password,
      localDay: new Date().toLocaleString(),
    };

    console.log("Payload =>", payload);

    try {
      const response = await axios.post(
        `${config.BASE_URL}/auth/signup`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        }
      );
      console.log(
        "Signup response data:",
        JSON.stringify(response.data, null, 2)
      );

      // Check if the API returned an error field
      if (response.data.error !== undefined) {
        Alert.alert(
          "Erreur",
          "La création du compte a échoué, veuillez réessayer."
        );
        return;
      }

      // Save token and user ID to AsyncStorage
      if (response.data.token && response.data.user?.id) {
        await AsyncStorage.setItem("token", response.data.token);
        await AsyncStorage.setItem("userId", response.data.user.id.toString());
      }

      Alert.alert("Succès", "Compte créé avec succès !", [
        {
          text: "OK",
          onPress: () => {
            router.push("/userProfile");
          },
        },
      ]);
    } catch (error: any) {
      Alert.alert(
        "Erreur",
        error.response?.data?.error ||
          error.message ||
          "Vérifiez votre connexion internet."
      );
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={colors.gradient.colors}
      start={colors.gradient.start}
      end={colors.gradient.end}
    >
      <BackButton containerStyle={styles.backButton} />

      {/* Header / Logo */}
      <View style={styles.headerContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Pour être trouvé {"\n"}
          <Text>il faut être vu!</Text>
        </Text>
        <Text style={styles.subtitle}>PLACEZ-VOUS SUR LA CARTE</Text>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedLocation === "zone" && styles.selectedOptionButton,
          ]}
          onPress={() => setSelectedLocation("zone")}
        >
          <Text style={styles.optionButtonText}>Zone</Text>
          <Text style={styles.optionButtonSubText}>
            Vous placer au centre de votre région
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedLocation === "rendezvous" && styles.selectedOptionButton,
          ]}
          onPress={() => setSelectedLocation("rendezvous")}
        >
          <Text style={styles.optionButtonText}>Rendez-vous</Text>
          <Text style={styles.optionButtonSubText}>
            Définir un point précis sur la map
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedLocation === "partage" && styles.selectedOptionButton,
          ]}
          onPress={() => setSelectedLocation("partage")}
        >
          <Text style={styles.optionButtonText}>Partage</Text>
          <Text style={styles.optionButtonSubText}>
            Partagez ma position exacte
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer with Publish Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
          <Text style={styles.publishButtonText}>Publiez</Text>
        </TouchableOpacity>
        <Image
          style={styles.progressImage}
          source={require("../../assets/Wizard/Progress5.png")}
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
    marginTop: 70,
    marginBottom: 20,
  },
  logo: {
    width: 184,
    height: 79,
    resizeMode: "contain",
  },
  content: {
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 26,
    color: colors.white,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: colors.black,
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  optionButton: {
    width: 300,
    height: 86,
    backgroundColor: "#6FB6CF",
    borderRadius: 8,
    marginVertical: 10,
    borderColor: "#79CEEC",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  selectedOptionButton: {
    borderColor: colors.orangeDark,
    borderWidth: 4,
    backgroundColor: "#6FB6CF",
  },
  optionButtonText: {
    color: colors.white,
    fontSize: 32,
    fontWeight: "500",
  },
  optionButtonSubText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "300",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 30,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  publishButton: {
    width: 203,
    height: 62,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 31,
    backgroundColor: colors.orangeDark,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  publishButtonText: {
    color: colors.white,
    fontSize: 26,
    fontWeight: "600",
  },
  progressImage: {
    width: "100%",
    height: 20,
    resizeMode: "contain",
    marginBottom: 15,
  },
});

export default Step5Location;
