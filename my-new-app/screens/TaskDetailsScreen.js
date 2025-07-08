import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Button from "../components/Button";
import styles, { primaryColor, softGray, secondaryText } from "../styles";

export default function TaskDetailsScreen({ navigation, route }) {
  const { task } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={[styles.container, { paddingHorizontal: 20 }]}>
        {/* Header */}
        <View style={styles.screenHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color={primaryColor} />
          </TouchableOpacity>
          <Text style={styles.screenTitle}>Task Details</Text>
          <View style={{ width: 26 }} />
        </View>

        {/* Task Overview */}
        <View style={styles.taskDetailsHeader}>
          <View style={styles.userAvatar} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.userName}>Task Overview</Text>
            <Text style={styles.userSubTitle}>
              Details and actions for your task
            </Text>
          </View>
        </View>

        {/* Task Info */}
        <View style={styles.taskInfoContainer}>
          <View style={styles.taskInfoRow}>
            <Ionicons
              name="document-text-outline"
              size={22}
              color={primaryColor}
            />
            <View style={styles.taskInfoTextContainer}>
              <Text style={styles.taskInfoTitle}>Title</Text>
              <Text style={styles.taskInfoValue}>{task.title}</Text>
            </View>
          </View>

          <View style={styles.taskInfoRow}>
            <Ionicons name="clipboard-outline" size={22} color={primaryColor} />
            <View style={styles.taskInfoTextContainer}>
              <Text style={styles.taskInfoTitle}>Note</Text>
              <Text style={styles.taskInfoValue}>
                Pick up a gallon of milk and verify the expiration date.
              </Text>
            </View>
          </View>

          <View style={styles.taskInfoRow}>
            <Ionicons name="location-sharp" size={22} color={primaryColor} />
            <View style={styles.taskInfoTextContainer}>
              <Text style={styles.taskInfoTitle}>Geolocation</Text>
              <Text style={styles.taskInfoValue}>7-Eleven</Text>
            </View>
          </View>

          <View style={styles.taskInfoRow}>
            <Ionicons name="ruler-outline" size={22} color={primaryColor} />
            <View style={styles.taskInfoTextContainer}>
              <Text style={styles.taskInfoTitle}>Distance from Current Location</Text>
              <Text style={styles.taskInfoValue}>200m</Text>
            </View>
          </View>
        </View>

        {/* Map placeholder */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapPlaceholderText}>
            Your task location with geofence overlay.
          </Text>
        </View>

        {/* Action Buttons */}
        <Button outline title="Edit" style={{ marginVertical: 6 }} onPress={() => {}} />
        <Button outline title="Delete" style={{ marginVertical: 6 }} onPress={() => {}} />
        <Button title="Mark as Done" style={{ marginVertical: 6 }} onPress={() => {}} />
        <Button
          title="Toggle Geofence Tracking"
          style={{ marginVertical: 6 }}
          onPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}