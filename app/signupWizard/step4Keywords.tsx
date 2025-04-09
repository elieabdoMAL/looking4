// app/signupWizard/step4Keywords.tsx
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

const Step4Keywords: React.FC = () => {
  const router = useRouter();
  const { userName, images, description, email, password } =
    useLocalSearchParams<{
      userName?: string;
      images?: string[];
      description?: string;
      email?: string;
      password?: string;
    }>();

  const [keywords, setKeywords] = useState("");

  const handleNext = () => {
    // Log the wizard data including keywords
    console.log("Wizard data =>", {
      userName,
      images,
      description,
      keywords,
      email,
    });
    // Navigate to Step5Location
    router.push({
      pathname: "/signupWizard/step5Location",
      params: { userName, images, description, keywords, email, password },
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

      {/* Header / Logo */}
      <View style={styles.headerContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Looking 4 permet de faire des recherches en fonction de mots clés
        </Text>
        <Text style={styles.subtitle}>AJOUTEZ DES MOTS CLEFS #</Text>

        {/* Text area for keywords */}
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            placeholder="#MotsClés"
            placeholderTextColor="#999"
            multiline
            value={keywords}
            onChangeText={setKeywords}
          />
        </View>

        {/* Info text */}
        <Text style={styles.infoText}>
          Une bonne idée est d’ajouter des intérêts que vous voulez partager!
        </Text>
      </View>

      {/* Footer: button + progress image */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Suivant</Text>
        </TouchableOpacity>
        <Image
          style={styles.progressImage}
          source={require("../../assets/Wizard/Progress4.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 999,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 77,
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
  textAreaContainer: {
    width: 357,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 15,
    // Shadow (iOS + Android)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    overflow: "hidden",
  },
  textArea: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 14,
    color: "#333",
    textAlignVertical: "top",
  },
  infoText: {
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
    fontStyle: "italic",
    width: 300,
    lineHeight: 16,
    marginBottom: 10,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 30,
    right: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  nextButton: {
    width: 203,
    height: 62,
    marginBottom: 30,
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
  nextButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    marginRight: 8,
  },
  progressImage: {
    width: "100%",
    height: 20,
    resizeMode: "contain",
    marginBottom: 15,
  },
});

export default Step4Keywords;
