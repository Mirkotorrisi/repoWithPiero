import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


const handlePress = (pos) => {
  Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${pos.latitude},${pos.longitude}&travelmode=driving`)
}
let position = {
  latitude: 37.5,
  longitude: 15.09
}
let position2 = {
  latitude: 37.4,
  longitude: 15.11
}
let position3 = {
  latitude: 37.1,
  longitude: 15.08
}
export default function App() {



  return (
    <View style={styles.container}>
      <Text><a href="www.google.com">Ciao</a></Text>
      <Text>modifica jonny</Text>
      <Text>modifica mirko</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.5,
          longitude: 15.09,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          key={1}
          coordinate={position}
          title={"marker.title"}
          description={"marker.description"}
          onPress={(position) => handlePress(position)}
        />
        <Marker
          key={2}
          coordinate={position2}
          title={"marker.title"}
          description={"marker.description"}
          onPress={(position2) => handlePress(position2)}
        />
        <Marker
          key={3}
          coordinate={position3}
          title={"marker.title"}
          description={"marker.description"}
          onPress={(position3) => handlePress(position3)}
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
