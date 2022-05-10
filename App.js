import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { levelTerrain, level2, level1, mapRetroStyle } from './model/mapData';
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
  const [currentPoints, setCurrentPoints] = useState([]);
  const [currentColors, setCurrentColors] = useState([]);

  const clickIcon = ({ coordinate }) => {
    const { latitude, longitude } = coordinate;
    currentPoints.map((marker, index) => {

      if (latitude === marker.coordinate.latitude && longitude === marker.coordinate.longitude) {
        setCurrentColors(marker.coordenates);
        marker.fillColor = true;
      }
      else {
        marker.fillColor = false;
      }
      console.log(marker.fillColor);
    })
  };


  const loadMap = () => {
    setCurrentPoints(levelTerrain);
  }

  const onChangeIndoorLevel = ({ IndoorLevel }) => {
    const { name } = IndoorLevel;
    if (name == "T") {
      setCurrentPoints(levelTerrain);
    }
    if (name == "1") {
      setCurrentPoints(level1);
    }
    if (name == "2") {
      setCurrentPoints(level2);
    }
  };
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
        showsIndoors={true}
        showsIndoorLevelPicker={true}
        zoomControlEnabled={true}
        zoomEnabled={true}
        minZoomLevel={18}
        onIndoorLevelActivated={(event) => onChangeIndoorLevel(event.nativeEvent)}
        onMapReady={loadMap}
      >
        {currentPoints.map((marker, index) => {
          if (marker.coordenates != currentColors) {
            return (
              <>
                <Marker
                  coordinate={marker.coordinate}
                  image={marker.image}
                  title={marker.title}
                  description={marker.description}
                  onPress={(event) => clickIcon(event.nativeEvent)}
                />
                <Polygon
                  coordinates={marker.coordenates}
                  strokeColor="red"
                  strokeWidth={2}
                  fillColor='transparent'
                />
              </>
            )
          } else if (marker.coordenates === currentColors && marker.fillColor === true) {
            return (
              <>
                <Marker
                  coordinate={marker.coordinate}
                  image={marker.image}
                  title={marker.title}
                  description={marker.description}
                  onPress={(event) => clickIcon(event.nativeEvent)}
                />
                <Polygon
                  coordinates={marker.coordenates}
                  strokeColor="red"
                  strokeWidth={2}
                  fillColor={marker.color}
                />
              </>
            )
          }
        })}
      </MapView>
    </View >
  )
};
