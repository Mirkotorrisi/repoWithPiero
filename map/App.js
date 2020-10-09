import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function App() {
  const handlePress = (coord) => console.log(coord)
  let coordinates = {
    latitude: 40.7143528,
    longitude: -74.0059731
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 40.7143528,
          longitude: -74.0059731,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          key={1}
          coordinate={coordinates}
          title={"marker.title"}
          description={"marker.description"}
          onPress={handlePress(coordinates)}
        />
        <Marker
          key={2}
          coordinate={{ latitude: 40.7543528, longitude: - 74.1059731 }}
          title={"marker.title"}
          description={"marker.description"}
          onPress={handlePress}

        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: 500,
    width: 500
  }
});
