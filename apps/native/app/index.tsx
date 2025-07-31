import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {AuthForm} from "@repo/ui/src";

export default function Native() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
        <AuthForm submitButtonText={"Login"} onSubmit={() => alert("LoginFormSubmitted")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
