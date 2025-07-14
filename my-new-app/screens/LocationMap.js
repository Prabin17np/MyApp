// components/LocationMap.js

import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import * as Location from "expo-location";

const LocationMap = ({ radius = 100 }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied.");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={{ height: 200, justifyContent: "center", alignItems: "center" }}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={{ height: 200, justifyContent: "center", alignItems: "center" }}>
        <Text>Fetching location…</Text>
      </View>
    );
  }

  return (
    <View style={{ height: 200, borderRadius: 10, overflow: "hidden", marginTop: 12 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
      >
        <Marker coordinate={location} title="You are here" />
        <Circle
          center={location}
          radius={parseFloat(radius) || 100}
          strokeColor="rgba(0, 122, 255, 0.5)"
          fillColor="rgba(0, 122, 255, 0.1)"
        />
      </MapView>
    </View>
  );
};

export default LocationMap;
