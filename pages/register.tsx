/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "../components/button";


export default function Register({navigation}) {
  const [email, onChangeEmail] = React.useState('Enter your email');
  const [password, onChangePassword] = React.useState('Enter your password');
  return (

    <View style={styles.root}>
    <View style={styles.header}>
    <TextInput
      style={{ height: 40, fontSize:28, color:"#222222" }}
      onChangeText={text => onChangeEmail(text)}
      placeholder={email}
      autoCapitalize="none"
      testID="emailField"
      placeholderTextColor="#333333"
    />
     <TextInput
      style={{ height: 40, fontSize:28 ,marginTop:40, color:"#222222"}}
      onChangeText={text => onChangePassword(text)}
      placeholder={password}
      autoCapitalize="none"
      placeholderTextColor="#333333"
      testID="passwordField"
    />
     <TouchableOpacity onPress={() => navigation.navigate("ListCourses")} style={styles.continueBtn}>
        <Text style={styles.title}>Continue</Text>
      </TouchableOpacity>
      </View>
     
    </View>   
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DACFF0",
    flex:1,
    paddingHorizontal: 16,
    justifyContent:"center",
  },
  root: { flex: 1, },
  continueBtn: {
    backgroundColor: "#6E26AD",
    borderRadius: 20,
    width: 160,
    height: 48,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop:40
  },
  title: {fontSize: 24, color: "white" },
})