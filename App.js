import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from "react-native";
import { markers, mapRetroStyle, regions } from './model/mapData';
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});


export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        region={{
          latitude: -23.591392169792996,
          longitude: -46.689828646073224,
          latitudeDelta: 0.0015,
          longitudeDelta: 0.0015,
        }}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapRetroStyle}
        zoomEnabled={true}
      >
        {markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              image={marker.image}
              title={marker.title}
              description={marker.description}
            ></Marker>
          );
        })}
        {regions.map((region, index) => {
          return (
            <>
              <Polygon
                coordinates={region.coordinates}
                strokeColor="red"
                strokeWidth={2}
              />
            </>
          );

        })}
      </MapView>
    </View>

  )
};
