import React, { FC, useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import LinearGradient from "expo-linear-gradient";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import BackButton from "../../src/components/BackButton";

import { styles, popupStyles } from "./styles";
import config from "../../src/utils/config";

const API_URL = `${config.BASE_URL}/users/getMyProfile`;

const UserProfileScreen: FC = () => {
  const [userFullName, setUserFullName] = useState<string>("");
  const [mainImageUri, setMainImageUri] = useState<string>("");
  const [thumbnails, setThumbnails] = useState<string[]>(new Array(4).fill(""));
  const [description, setDescription] = useState<string>("");
  const [zone, setZone] = useState<string>("");
  const [showLocationPopup, setShowLocationPopup] = useState<boolean>(false);

  const router = useRouter();

  // On component mount, fetch profile data from the API.
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const userId = await AsyncStorage.getItem("userId");
        if (!token || !userId) return;

        const response = await axios.post(
          API_URL,
          { checksum: "" },
          {
            headers: {
              "Content-Type": "application/json",
              userid: userId,
              authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && response.data.user) {
          const profile = response.data.user;
          setUserFullName(profile.name || "Nom complet de l’utilisateur");

          setMainImageUri(
            profile.profile_image ||
              "../../assets/UserProfile/mainImagePlaceholder.png"
          );
          setDescription(
            profile.description || "Enter you description here..."
          );
          setZone(profile.zone || "");
          setThumbnails(profile.thumbnails || new Array(4).fill(""));
        }
      } catch (error: any) {
        console.error("Error fetching profile:", error.message);
      }
    };

    fetchProfile();
  }, []);

  // Function to pick a new main image
  const pickMainImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") return;
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setMainImageUri(result.assets[0].uri);
    }
  };

  // Function to update a thumbnail image
  const pickThumbnail = async (index: number) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") return;
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      const updated = [...thumbnails];
      updated[index] = result.assets[0].uri;
      setThumbnails(updated);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Header Section with BackButton */}
        <View style={styles.headerSection}>
          <BackButton containerStyle={styles.backButton} />
          <View style={styles.spacer} />
          <Text style={styles.userFullName}>{userFullName}</Text>
        </View>

        {/* Icon Bar */}
        <View style={styles.iconBar}>
          <Image
            source={require("../../assets/UserProfile/location.png")}
            style={styles.topIcon}
            resizeMode="stretch"
          />
          <Image
            source={require("../../assets/UserProfile/share.png")}
            style={styles.topIcon}
            resizeMode="stretch"
          />
          <Image
            source={require("../../assets/UserProfile/message.png")}
            style={styles.topIcon}
            resizeMode="stretch"
          />
          <Image
            source={require("../../assets/UserProfile/block.png")}
            style={styles.topIcon}
            resizeMode="stretch"
          />
        </View>

        {/* Main Image Section */}
        <TouchableOpacity
          style={styles.mainImageContainer}
          onPress={pickMainImage}
        >
          {mainImageUri ? (
            <Image source={{ uri: mainImageUri }} style={styles.mainImage} />
          ) : (
            <Image
              source={require("../../assets/UserProfile/mainImagePlaceholder.png")}
              style={styles.mainImagePlaceholder}
              resizeMode="stretch"
            />
          )}
          <Image
            source={require("../../assets/UserProfile/crownIcon.png")}
            style={styles.crownIcon}
            resizeMode="stretch"
          />
        </TouchableOpacity>

        {/* Thumbnails Row */}
        <View style={styles.thumbnailsRow}>
          {thumbnails.map((thumb, index) => (
            <TouchableOpacity
              key={`thumb-${index}`}
              style={styles.thumbnailContainer}
              onPress={() => pickThumbnail(index)}
            >
              {thumb ? (
                <Image source={{ uri: thumb }} style={styles.thumbnailImage} />
              ) : (
                <Image
                  source={require("../../assets/UserProfile/profileImagePlaceholder.png")}
                  style={styles.thumbnailPlaceholder}
                  resizeMode="stretch"
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Description */}
        <Text style={styles.descriptionLabel}>Description</Text>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Écrire une bref description ici..."
          placeholderTextColor="#999"
          multiline
          value={description}
          onChangeText={setDescription}
        />

        {/* Location */}
        <Text style={styles.locationLabel}>Localisation</Text>
        <View style={styles.locationRow}>
          <TouchableOpacity
            style={styles.locationIconContainer}
            onPress={() => setShowLocationPopup(true)}
          >
            <Image
              source={require("../../assets/UserProfile/locationButton.png")}
              style={styles.locationIcon}
              resizeMode="center"
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Zone"
            value={zone}
            onChangeText={setZone}
            style={styles.locationInput}
          />
        </View>
      </ScrollView>

      {/* POPUP MODAL */}
      <Modal
        visible={showLocationPopup}
        transparent
        animationType="fade"
        onRequestClose={() => setShowLocationPopup(false)}
      >
        <SafeAreaView style={popupStyles.popupContainer}>
          <ImageBackground
            source={require("../../assets/UserProfile/locationButton.png")}
            style={popupStyles.popupBackground}
          >
            {/* …popup content… */}
          </ImageBackground>
          <TouchableOpacity
            style={popupStyles.closeArea}
            onPress={() => setShowLocationPopup(false)}
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
