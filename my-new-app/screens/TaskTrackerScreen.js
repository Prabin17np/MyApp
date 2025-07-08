import React from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../components/Button";
import styles, { primaryColor } from "../styles";

export default function TaskTrackerScreen({ navigation }) {
  const upcomingTasks = [
    {
      id: "1",
      icon: "location-sharp",
      title: "Buy Milk @ 7-Eleven",
      subtitle: "300m away",
      status: "In Progress",
    },
    {
      id: "2",
      icon: "location-sharp",
      title: "Pick up Laundry @ CleanX",
      subtitle: "500m away",
      status: "In Progress",
    },
  ];

  const allTasks = [
    {
      id: "3",
      icon: "cube-outline",
      title: "Drop package @ UPS",
      subtitle: "1km away",
      status: "Completed",
    },
    {
      id: "4",
      icon: "call-outline",
      title: "Call plumber",
      subtitle: "N/A",
      status: "Pending",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={[styles.container, { paddingHorizontal: 20 }]}>
        <View style={styles.screenHeaderWide}>
          <Text style={styles.screenTitle}>Task Tracker</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Ionicons name="person-circle" size={28} color={primaryColor} />
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="settings-outline" size={26} color={primaryColor} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Upcoming Tasks</Text>
        {upcomingTasks.map((task) => (
          <View key={task.id} style={styles.taskTrackerRow}>
            <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
              <Ionicons
                name={task.icon}
                size={22}
                color={primaryColor}
                style={{ marginRight: 8 }}
              />
              <Text style={styles.taskTrackerTitle} numberOfLines={1}>
                {task.title}
              </Text>
              <Text style={styles.taskTrackerSubTitle} numberOfLines={1}>
                {task.subtitle}
              </Text>
            </View>
            <Text style={styles.taskTrackerStatus}>{task.status}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>All Tasks</Text>
        {allTasks.map((task) => (
          <View key={task.id} style={styles.taskTrackerRow}>
            <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
              <Ionicons
                name={task.icon}
                size={22}
                color={primaryColor}
                style={{ marginRight: 8 }}
              />
              <Text style={styles.taskTrackerTitleSmall} numberOfLines={1}>
                {task.title}
              </Text>
              <Text style={styles.taskTrackerSubTitleSmall} numberOfLines={1}>
                {task.subtitle}
              </Text>
            </View>
            <Text style={styles.taskTrackerStatus}>{task.status}</Text>
          </View>
        ))}

        <Button
          title="+ Add Task"
          style={{ marginTop: 24, marginBottom: 24 }}
          onPress={() => navigation.navigate("AddTask")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}