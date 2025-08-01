import * as React from "react";
import {
  StyleSheet,
  GestureResponderEvent,
  Text,
  Pressable,
} from "react-native";

import { Button, ButtonText } from "../components/ui/button";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function UIButton({ text, onClick }: ButtonProps) {
  return (
    <Button size="md" variant="solid" action="primary" onPress={onClick}>
      <ButtonText>{text}</ButtonText>
    </Button>
    // <Pressable style={styles.button} onPress={onClick}>
    //   <Text style={styles.text}>{text}</Text>
    // </Pressable>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     maxWidth: 350,
//     minWidth: 150,
//     borderRadius: 20,
//     paddingTop: 8,
//     paddingBottom: 8,
//     paddingLeft: 20,
//     paddingRight: 20,
//     fontSize: 15,
//     backgroundColor: "#2f80ed",
//     marginStart: "auto",
//     marginEnd: "auto",
//   },
//   text: {
//     color: "white",
//     textAlign: "center",
//     textTransform: "uppercase",
//   },
// });
