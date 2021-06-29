import * as React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity
          testID="signUpButton"
          style={styles.signUpBtn}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.title}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="signInButton"
          style={styles.signInBtn}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.title}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#DACFF0",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  root: { flex: 1 },
  signUpBtn: {
    backgroundColor: "#6E26AD",
    borderRadius: 20,
    width: 160,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  signInBtn: {
    backgroundColor: "#6E26AD",
    borderRadius: 20,
    width: 160,
    height: 48,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  title: { fontSize: 24, color: "white" },
});
