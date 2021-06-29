/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import {
  StyleProp,
  View,
  ViewStyle,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

interface Props {
  title: string;
  size?: "small" | "medium";
  color?:string;
  textColor?:string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => any;
}

const paddingHorizontalLookup = {
  small: 16,
  medium: 32,
};
const paddingVerticalLookup = {
  small: 8,
  medium: 16,
};
const marginLookup = {
  small: 8,
  medium: 16,
};



export default function Button(props: Props) {
  const {
    title,
    size = "medium",
    color,
    disabled,
    textColor = "white",
    style,
    onPress,
  } = props;
  const paddingHorizontal = paddingHorizontalLookup[size];
  const paddingVertical = paddingVerticalLookup[size];
  const margin = marginLookup[size];


  return (
      <TouchableOpacity
        disabled={disabled}
        style={styles.button}
        accessibilityRole="button"
        accessibilityState={{ disabled: disabled }}
        onPress={onPress}
      >        
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: paddingHorizontal,
            paddingVertical: paddingVertical,
            backgroundColor:color,
            borderRadius: 32,
          }}
        >
          <Text
            style={[{color: textColor},styles.text]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    button: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginRight: 0,
    marginLeft: 0,
    textAlign: "center",
  }
})