/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from "react-native";


export default function ListCourses() {
  return (
    <View style={{backgroundColor:"#FFE2D5", flex:1, paddingTop:48, paddingHorizontal:32 }}>
    <Text style={styles.header}>
    My Courses
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  // root: {backgroundColor:"white", padding:10},
  header: {color:"#E2683E", fontSize: 28, textAlign:"center", fontWeight:"800"}
})