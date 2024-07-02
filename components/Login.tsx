import { Text, TextInput, View, Button } from "react-native";
import { Image, StyleSheet, Platform } from "react-native";
import React from "react";
interface props {
  hi: string;
  number: number;
  age?: string;
}
const Login: React.FC<props> = ({ hi, number }) => {
  const [userName, onchangeUserName] = React.useState("");
  const [Password, onChangePassword] = React.useState("");
  return (
    <View>
      <View>
        <Text style={styles.header}>Login</Text>
      </View>
      <View>
        <Text style={styles.label}>User Name :</Text>
        <TextInput
          placeholder="username"
          style={styles.input}
          value={userName}
          onChangeText={onchangeUserName}
        ></TextInput>
        <Text style={styles.label}>Password :</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={Password}
          onChangeText={onChangePassword}
        ></TextInput>
        <View /* style={{ height: 30, width: "70%", alignItems: "center" }} */>
          <Button title="log in" color="indigo" />
        </View>
      </View>
      <View>
        <Text>{userName}</Text>
        <Text>{Password}</Text>
      </View>
    </View>
  );
};
export default Login;

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
    color: "indigo",
  },
  label: {
    fontSize: 20,
  },
});
