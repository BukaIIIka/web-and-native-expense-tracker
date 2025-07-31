import * as React from "react";
import {
  StyleSheet,
  GestureResponderEvent,
  Text,
  Pressable,
} from "react-native";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minWidth: 150,
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 15,
    backgroundColor: "#2f80ed",
    marginStart: "auto",
    marginEnd: "auto",
  },
  text: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase"
  },
});
