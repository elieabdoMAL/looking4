import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, useLocalSearchParams } from "expo-router";
import styles from "./styles";
import colors from "../../../src/styles/colors";
import BackButton from "../../../src/components/BackButton";

const Step1Name: React.FC = () => {
  const router = useRouter();

  // Retrieve and log parameters for debugging
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
      pathname: "./testSuccessfulPage",
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
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
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
          source={require("../../../assets/Wizard/Progress1.png")}
        />
      </View>
    </LinearGradient>
  );
};

export default Step1Name;
