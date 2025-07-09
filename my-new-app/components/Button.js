import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { primaryColor } from "../styles";

export default function Button({
  onPress,
  title,
  style = {},
  textStyle = {},
  outline = false,
  disabled = false,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress || (() => {})}
      disabled={disabled}
      accessible={true}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={[
        styles.button,
        outline ? styles.buttonOutline : null,
        disabled ? styles.buttonDisabled : null,
        style,
      ]}
    >
      <Text
        style={[styles.buttonText, outline ? styles.buttonTextOutline : null, textStyle]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: primaryColor,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
    ...Platform.select({
      ios: {
        shadowColor: "#2980b9",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  buttonOutline: {
    backgroundColor: "white",
    borderWidth: 1.8,
    borderColor: primaryColor,
  },
  buttonDisabled: {
    backgroundColor: "#aaa",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  buttonTextOutline: {
    color: primaryColor,
  },
});
