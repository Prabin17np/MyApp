import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { primaryColor, secondaryText } from "../styles";

export default function TaskItem({ item, onPress, completed = false }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.taskItem} activeOpacity={0.7}>
      <View style={styles.taskIcon}>
        <Ionicons
          name={item.icon || "ellipse-outline"}
          size={24}
          color={completed ? "#38a169" : "#777"}
        />
      </View>
      <View style={styles.taskTextSection}>
        <Text
          style={[
            styles.taskTitle,
            completed ? { textDecorationLine: "line-through" } : null,
          ]}
          numberOfLines={1}
        >
          {item.title}
        </Text>
        {item.subtitle ? (
          <Text style={styles.taskSubtitle} numberOfLines={1}>
            {item.subtitle}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  taskIcon: {
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  taskTextSection: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: primaryColor,
  },
  taskSubtitle: {
    fontSize: 13,
    color: secondaryText,
    marginTop: 2,
  },
});