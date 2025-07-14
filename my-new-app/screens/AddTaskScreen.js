import React, { useState, useEffect } from "react";
import LocationMap from "./LocationMap"; "./LocationMap.js"; // Importing the LocationMap component
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import Button from "../components/Button";
import styles, { primaryColor } from "../styles";

export default function AddTaskScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [geofenceRadius, setGeofenceRadius] = useState("");
  const [repeat, setRepeat] = useState("One-time");
  const repeatOptions = ["One-time", "Daily", "Weekly"];

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={[styles.container, { paddingHorizontal: 20 }]}>
        {/* Header */}
        <View style={styles.screenHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color={primaryColor} />
          </TouchableOpacity>
          <Text style={styles.screenTitle}>Add New Task</Text>
          <View style={{ width: 26 }} />
        </View>

        {/* Inputs */}
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task title here"
          onChangeText={setTitle}
          value={title}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Optional description"
          multiline
          numberOfLines={2}
          onChangeText={setDescription}
          value={description}
        />

        {/* Location Display */}
        <View style={styles.mapPlaceholder}>
          <LocationMap location={location} radius={geofenceRadius} />

        </View>
        <TouchableOpacity
  onPress={() => navigation.navigate("Map")}
  style={{
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  }}
>
  <Text style={{ color: "white", fontWeight: "bold" }}>Open Full Map</Text>
</TouchableOpacity>


        <Text style={[styles.label, { marginTop: 12 }]}>Search for address</Text>
        <View style={styles.searchRow}>
          <TextInput
            placeholder="Enter an address to lookup"
            style={[styles.input, { flex: 1 }]}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={[styles.label, { marginTop: 24 }]}>Geofence Radius</Text>
        <TextInput
          style={styles.input}
          placeholder="Adjust radius"
          keyboardType="numeric"
          onChangeText={setGeofenceRadius}
          value={geofenceRadius}
        />
        <Text style={[styles.subText, { marginBottom: 12 }]}>
          Select radius in meters (50m - 1000m)
        </Text>

        <Text style={[styles.label, { marginBottom: 6 }]}>Repeat</Text>
        <View style={styles.repeatRow}>
          {repeatOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.repeatOption,
                repeat === option ? styles.repeatOptionSelected : null,
              ]}
              onPress={() => setRepeat(option)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.repeatOptionText,
                  repeat === option ? { color: "white" } : null,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Buttons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <Button
            outline
            style={{ width: "48%" }}
            title="Cancel"
            onPress={() => navigation.goBack()}
          />
          <Button
            style={{ width: "48%" }}
            title="Save Task"
            onPress={() => {
              // Add your save logic here if needed
              navigation.navigate("Home");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
