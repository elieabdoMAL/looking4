// app/testSuccessfulPage.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TestSuccessfulPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test Successful!</Text>
      <Text>This page confirms that navigation works.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
