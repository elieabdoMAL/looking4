// app/WelcomePage/index.tsx
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import styles from "./styles";
import Colors from "../../src/styles/colors";
import Footer from "../../src/components/Footer";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "transparent" }}
      // Exclude the top safe area so the gradient extends to the very top.
      edges={["bottom", "left", "right"]}
    >
      <LinearGradient
        style={styles.container}
        colors={Colors.gradient.colors}
        start={Colors.gradient.start}
        end={Colors.gradient.end}
      >
        {/* HEADER */}
        <View style={styles.headerContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
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
