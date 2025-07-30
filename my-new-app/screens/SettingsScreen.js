import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const primaryColor = "#e74c3c"; // red color

const SettingsScreen = ({ navigation }) => {
  const handleEditProfile = () => {
    console.log("Edit Profile tapped");
    // navigation.navigate("EditProfile"); // Uncomment when screen exists
  };

  const handleChangePassword = () => {
    console.log("Change Password tapped");
  };

  const handleNotifications = () => {
    console.log("Notifications tapped");
  };

  const handleAboutApp = () => {
    console.log("About App tapped");
  };

  const handleLogout = () => {
    console.log("Logging out...");
    navigation.replace("Login")
    // Add Firebase sign-out logic here if needed
    // firebase.auth().signOut().then(() => navigation.replace("Login"));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={[styles.container, { paddingHorizontal: 20 }]}>
        {/* Header */}
        <View style={styles.screenHeader}>
          
          <View style={{ width: 26 }} />
        </View>

        {/* Settings Sections */}
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.settingItem} onPress={handleEditProfile}>
          <Ionicons name="person-outline" size={22} color={primaryColor} />
          <Text style={styles.settingText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={handleChangePassword}>
          <Ionicons name="lock-closed-outline" size={22} color={primaryColor} />
          <Text style={styles.settingText}>Change Password</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Notifications</Text>
        <TouchableOpacity style={styles.settingItem} onPress={handleNotifications}>
          <Ionicons name="notifications-outline" size={22} color={primaryColor} />
          <Text style={styles.settingText}>Push Notifications</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>App</Text>
        <TouchableOpacity style={styles.settingItem} onPress={handleAboutApp}>
          <Ionicons name="information-circle-outline" size={22} color={primaryColor} />
          <Text style={styles.settingText}>About App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={22} color="#D9534F" />
          <Text style={[styles.settingText, { color: "#D9534F" }]}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  screenHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: primaryColor,
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  settingText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});
