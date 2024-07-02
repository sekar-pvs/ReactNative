import { Image, StyleSheet, Platform } from "react-native";
//import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Text, TextInput, View, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
/* import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView"; */
import React from "react";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import Practice from "@/components/Practice";

export default function HomeScreen() {
  const [userName, onchangeUserName] = React.useState("");
  const [Password, onChangePassword] = React.useState("");
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <Signup hi="sekar" num={9} />
      <Login hi="sekar" number={8} />
      <Practice name="sekar" age={22} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  header: {
    width: "100%",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 50,
  },
  label: {
    fontSize: 20,
  },
});
