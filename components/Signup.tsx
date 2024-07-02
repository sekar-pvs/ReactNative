import { Text, View, StyleSheet, TextInput, Button } from "react-native";
interface props {
  hi: string;
  num: number;
  age?: number;
}
const Signup: React.FC<props> = ({ hi, num, age }) => {
  return (
    <View>
      <Text style={styles.header}>Signup</Text>

      <TextInput
        placeholder="Email..."
        style={styles.input}
        /* value={userName}
          onChangeText={onchangeUserName} */
      ></TextInput>
      <TextInput
        placeholder="Username..."
        style={styles.input}
        /* value={userName}
          onChangeText={onchangeUserName} */
      ></TextInput>

      <TextInput
        placeholder="Password..."
        style={styles.input}
        /* value={userName}
          onChangeText={onchangeUserName} */
      ></TextInput>

      <Button title="Create Account" color="indigo" />
      <Text style={{ textAlign: "center" }}>
        {" "}
        Already have a account ? click here
      </Text>
    </View>
  );
};
export default Signup;
const styles = StyleSheet.create({
  header: {
    width: "100%",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 50,
    color: "indigo",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
