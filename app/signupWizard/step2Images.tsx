import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import { useRouter, useLocalSearchParams } from "expo-router";
import BackButton from "../../src/components/BackButton";
import colors from "../../src/styles/colors";

const Step2Images: React.FC = () => {
  const router = useRouter();
  const { userName, email, password } = useLocalSearchParams<{
    userName?: string;
    email?: string;
    password?: string;
  }>();

  const [mainImage, setMainImage] = useState<string | null>(null);
  const [smallImages, setSmallImages] = useState<Array<string | null>>([
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permissions Required",
          "We need your permission to access the photo gallery!"
        );
      }
    })();
  }, []);

  const pickImage = async (index?: number) => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const pickedUri = result.assets[0].uri;
        if (index !== undefined) {
          const updated = [...smallImages];
          updated[index] = pickedUri;
          setSmallImages(updated);
        } else {
          setMainImage(pickedUri);
        }
      }
    } catch (err) {
      console.error("Image pick error:", err);
      Alert.alert("Error", "Something went wrong while picking an image.");
    }
  };

  const handleNext = () => {
    const nonNullSmallImages = smallImages.filter(
      (img): img is string => img !== null
    );
    let allImages: string[] = [...nonNullSmallImages];
    if (mainImage) {
      allImages = [mainImage, ...allImages];
    }

    // Log the collected images to the console
    console.log("Collected Images:", allImages);

    // Navigate to testSuccessfulPage with the collected images and other params
    router.navigate({
      pathname: "./step3Description",
      params: { userName, email, password, images: allImages },
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

      {/* Content area */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Représentez-vous{"\n"}en images Looking4
        </Text>
        <Text style={styles.subtitle}>AJOUTEZ DES IMAGES</Text>

        {/* Main Image Placeholder */}
        <TouchableOpacity
          style={styles.mainImageContainer}
          onPress={() => pickImage()}
        >
          {mainImage ? (
            <Image source={{ uri: mainImage }} style={styles.mainImage} />
          ) : (
            <Image
              source={require("../../assets/Wizard/imagePlaceholder.png")}
              style={styles.mainImage}
            />
          )}
        </TouchableOpacity>

        {/* Four small image placeholders */}
        <View style={styles.smallImagesRow}>
          {smallImages.map((imgUri, index) => (
            <TouchableOpacity
              key={index}
              style={styles.smallImageContainer}
              onPress={() => pickImage(index)}
            >
              {imgUri ? (
                <Image source={{ uri: imgUri }} style={styles.smallImage} />
              ) : (
                <Image
                  source={require("../../assets/Wizard/imagePlaceholderSmall.png")}
                  style={styles.smallImage}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Footer: Next button + progress bar */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Suivant</Text>
        </TouchableOpacity>
        <Image
          style={styles.progressImage}
          source={require("../../assets/Wizard/Progress2.png")}
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
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 14,
    color: colors.black,
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: 30,
  },
  mainImageContainer: {
    width: 357,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  mainImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  smallImagesRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  smallImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  smallImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
    fontSize: 26,
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

export default Step2Images;
