import React from "react";
import { Text, View } from "react-native";

interface props {
  name: string;
  age: number;
  phoneNumber?: number;
}
const Practice: React.FC<props> = ({ name, age, phoneNumber }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  );
};

export default Practice;
