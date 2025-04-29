// app/userProfile/index.tsx
import React, { FC, useState } from "react";
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
import { useRouter } from "expo-router";
import BackButton from "../../src/components/BackButton";

import { styles, popupStyles } from "./styles";

const UserProfileScreen: FC = () => {
  // Local state with default values
  const [userFullName, setUserFullName] = useState<string>(
    "Nom complet de l'utilisateur"
  );
  const [mainImageUri, setMainImageUri] = useState<string>("");
  const [thumbnails, setThumbnails] = useState<string[]>(new Array(4).fill(""));
  const [description, setDescription] = useState<string>(
    "Enter you description here..."
  );
  const [zone, setZone] = useState<string>("");
  const [showLocationPopup, setShowLocationPopup] = useState<boolean>(false);

  const router = useRouter();

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
              source={require("../../assets/UserProfile/mainImageIcon.png")}
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
                  source={
                    index === 0
                      ? require("../../assets/UserProfile/profileImagePlaceholder.png")
                      : require("../../assets/UserProfile/otherImagesPlaceholder.png")
                  }
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
