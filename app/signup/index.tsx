import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import axios from "axios";
import styles from "./styles";
import Colors from "../../src/styles/colors";
import Footer from "../../src/components/Footer";
import config from "../../src/utils/config";

const SignUp: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Traditional Sign-Up Handler
  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    console.log("Traditional sign up params:", email, password);
    router.replace({
      pathname: "/signupWizard/step1Name",
      params: { email, password },
    });
  };

  // Placeholder functions for social login buttons
  const handleFacebookLogin = () => {
    Alert.alert("Info", "Facebook sign-in functionality removed.");
  };

  const handleGoogleLogin = () => {
    Alert.alert("Info", "Google sign-in functionality removed.");
  };

  const handleAppleLogin = () => {
    Alert.alert("Info", "Apple sign-in functionality removed.");
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={Colors.gradient.colors}
      start={Colors.gradient.start}
      end={Colors.gradient.end}
    >
      {/* Logo */}
      <View style={styles.headerContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>
      {/* Email Input */}
      <View style={styles.viewStyle}>
        <Text style={styles.containerText}>ENTREZ VOTRE COURRIEL</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      {/* Password Input */}
      <View style={styles.viewStyle}>
        <Text style={styles.containerText}>ENTREZ VOTRE MOT DE PASSE</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {/* Confirm Password */}
      <View style={styles.viewStyle}>
        <Text style={styles.containerText}>CONFIRMEZ LE MOT DE PASSE</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      {/* Create Account Button */}
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={handleSignUp}
      >
        <Text style={styles.createAccountButtonText}>CRÉER UN COMPTE</Text>
      </TouchableOpacity>
      {/* Social Login Buttons */}
      <TouchableOpacity
        style={styles.socialButton}
        onPress={handleFacebookLogin}
      >
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>
      <Footer />
    </LinearGradient>
  );
};

export default SignUp;
