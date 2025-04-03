// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../src/styles/colors";

export default function Layout() {
  return (
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
  );
}
