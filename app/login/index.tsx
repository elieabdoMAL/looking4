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
import axios from "axios";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import Colors from "../../src/styles/colors";
import Footer from "../../src/components/Footer";
import config from "../../src/utils/config";

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // POST request to the signin endpoint.
      const response = await axios.post(`${config.BASE_URL}/auth/signin`, {
        email,
        pwd: password,
        mediaChecksum: JSON.stringify([]),
        localDay: new Date().toISOString(),
      });

      console.log("Login success:", response.data);

      // Save the token and user id into AsyncStorage
      if (response.data && response.data.token && response.data.user?.id) {
        await AsyncStorage.setItem("token", response.data.token);
        await AsyncStorage.setItem("userId", response.data.user.id.toString());
      } else {
        console.error("Missing token or user ID in response", response.data);
      }

      Alert.alert("Login Successful", "You have logged in successfully!", [
        {
          text: "OK",
          onPress: () => {
            router.push("/userProfile"); // Navigate to profile page (adjust route if needed)
          },
        },
      ]);
    } catch (error: any) {
      console.error("Login error:", error);
      if (error.response && error.response.status === 401) {
        Alert.alert(
          "Error",
          "Invalid credentials. Please check your email and password."
        );
      } else {
        Alert.alert("Error", "Network error or unexpected error occurred.");
      }
    }
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

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>SE CONNECTER</Text>
      </TouchableOpacity>

      {/* Social Login Buttons */}
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <Footer />
    </LinearGradient>
  );
};

export default Login;
