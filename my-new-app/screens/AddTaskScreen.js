import React, { useState, useEffect } from "react";
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
import MapView, { Marker } from "react-native-maps";
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
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      const coords = currentLocation.coords;
      setLocation(coords);
      setSelectedLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    })();
  }, []);

  const handleMapPress = (event) => {
    setSelectedLocation(event.nativeEvent.coordinate);
  };

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

        {/* Map Picker */}
        <Text style={[styles.label, { marginTop: 16, marginBottom: 8 }]}>
          Select Task Location
        </Text>
        {location ? (
          <MapView
            style={{ width: "100%", height: 200, borderRadius: 8 }}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            onPress={handleMapPress}
          >
            {selectedLocation && <Marker coordinate={selectedLocation} />}
          </MapView>
        ) : errorMsg ? (
          <Text>{errorMsg}</Text>
        ) : (
          <Text>Loading map...</Text>
        )}

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
            marginBottom: 30,
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
              // You can save task info here, including selectedLocation
              navigation.navigate("Home");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
