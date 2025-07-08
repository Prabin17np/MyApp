import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../components/Button";
import styles, { primaryColor } from "../styles";

export default function NotificationsScreen({ navigation }) {
  const alerts = [
    {
      id: "a1",
      icon: "notifications-outline",
      title: "Buy Milk",
      location: "7-Eleven",
      status: "Triggered 5 minutes ago",
    },
    {
      id: "a2",
      icon: "notifications-outline",
      title: "Call Plumber",
      location: "Not set",
      status: "Scheduled for Tomorrow",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={[styles.container, { paddingHorizontal: 20, marginBottom: 60 }]}
      >
        <View style={styles.screenHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color={primaryColor} />
          </TouchableOpacity>
          <Text style={styles.screenTitle}>Notifications / Alerts</Text>
          <View style={{ width: 26 }} />
        </View>

        <View style={styles.statusRow}>
          <TouchableOpacity style={styles.statusBox}>
            <Ionicons name="arrow-forward-outline" size={40} color="#777" />
            <Text style={styles.statusText}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statusBox}>
            <Ionicons name="time-outline" size={40} color="#777" />
            <Text style={styles.statusText}>Past</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statusBox}>
            <Ionicons name="close-circle-outline" size={40} color="#D9534F" />
            <Text style={[styles.statusText, { color: "#D9534F" }]}>Missed</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Recent Alerts</Text>
        {alerts.map((alert) => (
          <View key={alert.id} style={styles.alertRow}>
            <Ionicons
              name={alert.icon}
              size={24}
              color="#f0ad4e"
              style={{ marginRight: 10 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.taskTitle}>{alert.title}</Text>
              <Text style={[styles.taskSubtitle, { fontSize: 12 }]}>
                Location: {alert.location}
              </Text>
            </View>
            <Text
              style={[styles.taskTitle, { fontWeight: "700", fontSize: 12 }]}
            >
              {alert.status}
            </Text>
          </View>
        ))}

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
          <Button outline title="Filter" style={{ width: "48%" }} onPress={() => {}} />
          <Button title="Add Alert" style={{ width: "48%" }} onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}