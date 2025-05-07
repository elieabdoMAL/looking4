// app/userMap/index.tsx
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { useRouter } from "expo-router";
import styles from "./styles";

const UserMapScreen: React.FC = () => {
  const router = useRouter();
  const mapRef = useRef<MapView>(null);

  // Initial map region (Montreal coordinates as example)
  const [region, setRegion] = useState<Region>({
    latitude: 45.5017,
    longitude: -73.5673,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Mock user location
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 45.5017,
    longitude: -73.5673,
  });

  // Mock friends data with locations
  const [friends, setFriends] = useState([
    { id: 1, name: "Ami 1", latitude: 45.5025, longitude: -73.5683 },
    { id: 2, name: "Ami 2", latitude: 45.501, longitude: -73.569 },
    { id: 3, name: "Ami 3", latitude: 45.499, longitude: -73.566 },
  ]);

  // Handle navigation to user profile
  const goToProfile = () => {
    router.push("/userProfile");
  };

  // Center map on user's location
  const centerOnUser = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.0072,
          longitudeDelta: 0.0051,
        },
        1000
      ); // Animation duration in ms
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Map View */}
      <View style={styles.mapContainer}>
        <View style={styles.mapWrapper}>
          <MapView
            ref={mapRef}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsIndoorLevelPicker={false}
            showsMyLocationButton={false}
            mapType="standard"
            initialRegion={region}
            onRegionChangeComplete={setRegion}
            showsUserLocation={false}
            showsPointsOfInterest={false}
            showsCompass={false}
            showsScale={false}
            showsBuildings={false}
            showsTraffic={false}
            showsIndoors={false}
            toolbarEnabled={false}
            loadingEnabled={true}
            moveOnMarkerPress={false}
          >
            {/* User marker */}
            <Marker
              coordinate={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              }}
              tracksViewChanges={true}
            >
              <TouchableOpacity onPress={goToProfile}>
                <View style={styles.userMarkerContainer}>
                  <Image
                    source={require("../../assets/UserMap/userMarker.png")}
                    style={styles.userMarker}
                  />
                </View>
              </TouchableOpacity>
            </Marker>

            {/* Friend markers */}
            {friends.map((friend) => (
              <Marker
                key={friend.id}
                coordinate={{
                  latitude: friend.latitude,
                  longitude: friend.longitude,
                }}
                tracksViewChanges={false}
              >
                <Image
                  source={require("../../assets/UserMap/userMarker.png")}
                  style={styles.friendMarker}
                />
              </Marker>
            ))}
          </MapView>
        </View>
      </View>

      {/* Search bar overlay at the top */}
      <View style={styles.searchBarOverlay}>
        <View style={styles.searchBarContainer}>
          <Image
            source={require("../../assets/Icon/icon4.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <TextInput style={styles.searchInput} placeholder="Looking 4" />
        </View>
        <Image
          source={require("../../assets/UserMap/infinitySign.png")}
          style={styles.searchIcon}
        />
      </View>

      {/* Map Controls */}
      <View style={styles.mapControlsContainer}>
        {/* Find on Map Button */}
        <TouchableOpacity
          style={styles.mapControlButton}
          onPress={centerOnUser}
        >
          <Image
            source={require("../../assets/UserMap/CenterUser.png")}
            style={styles.controlIcon}
          />
        </TouchableOpacity>

        {/* My Position Button */}
        <TouchableOpacity style={styles.positionButton}>
          <View style={styles.positionIconContainer}>
            <Image
              source={require("../../assets/UserMap/markerButton.png")}
              style={styles.positionIcon}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {/* Profile Button */}
        <TouchableOpacity style={styles.navButton} onPress={goToProfile}>
          <Image
            source={require("../../assets/userImage.png")}
            style={styles.profilePic}
          />
        </TouchableOpacity>

        {/* Friends Button */}
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require("../../assets/UserMap/friendIcon.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        {/* Calendar Button */}
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require("../../assets/UserMap/calendarIcon.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        {/* Marker Button */}
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require("../../assets/UserMap/marqueIcon.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserMapScreen;
