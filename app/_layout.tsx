// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Colors from "../src/styles/colors";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        style="light"
        translucent={true}
        backgroundColor="transparent"
      />
      <LinearGradient
        colors={Colors.gradient.colors}
        start={Colors.gradient.start}
        end={Colors.gradient.end}
        style={{ flex: 1 }}
      >
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "transparent",
              marginTop: 0,
              paddingTop: 0,
            },
          }}
        />
      </LinearGradient>
    </View>
  );
}
