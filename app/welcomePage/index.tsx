// app/welcomePage/index.tsx
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import Colors from "../../src/styles/colors";
import Footer from "../../src/components/Footer";

// Mock user data for logo click login
const MOCK_USER = {
  id: "12345",
  name: "Jean Tremblay",
  token: "mock-token-12345",
};

export default function WelcomePage() {
  const router = useRouter();

  // Function to handle mock login through logo click
  const handleLogoClick = async () => {
    // Store mock user data in AsyncStorage
    await AsyncStorage.setItem("userId", MOCK_USER.id);
    await AsyncStorage.setItem("token", MOCK_USER.token);
    await AsyncStorage.setItem("userName", MOCK_USER.name);

    // Navigate directly to profile
    router.push("./userMap");
  };

  return (
    // Modified SafeAreaView to not use top or bottom edges
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "transparent" }}
      edges={["left", "right"]}
    >
      <LinearGradient
        style={styles.container}
        colors={Colors.gradient.colors}
        start={Colors.gradient.start}
        end={Colors.gradient.end}
      >
        {/* HEADER - Logo now clickable */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleLogoClick}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>

        {/* GRID SECTION */}
        <View style={styles.gridContainer}>
          <View style={styles.gridItem1}>
            <Image source={require("../../assets/WelcomePage/Group 120.png")} />
          </View>
          <View style={styles.gridItem2}>
            <Image source={require("../../assets/WelcomePage/Group 121.png")} />
          </View>
          <View style={styles.gridItem3}>
            <Text style={styles.gridItemText}>
              <Text style={styles.normalText}>RENCONTREZ </Text>
              <Text style={styles.boldText}> VOS AMIS</Text>
            </Text>
            <Text style={styles.gridItemText}>
              <Text style={styles.normalText}>ET DES</Text>
              <Text style={styles.boldText}> ACTIVITÉS</Text>
            </Text>
            <Text style={styles.gridItemText}>
              <Text style={styles.normalText}>Prêt de chez vous !</Text>
            </Text>
          </View>
          <View style={styles.gridItem4}>
            <Text style={[styles.gridItemText, styles.highlight]}>
              Activités | spectacles | événements
            </Text>
          </View>
          <View style={styles.gridItem5}>
            <Image source={require("../../assets/WelcomePage/Group 122.png")} />
          </View>
        </View>

        {/* BUTTONS */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("./login")}
          >
            <Text style={styles.loginButtonText}>me connectez</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => router.push("./signup")}
          >
            <Text style={styles.registerButtonText}>créer un compte</Text>
          </TouchableOpacity>
        </View>

        {/* FOOTER */}
        <Footer />
      </LinearGradient>
    </SafeAreaView>
  );
}
