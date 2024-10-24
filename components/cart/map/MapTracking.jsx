import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './MapTracking.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SIZES } from '../../../constants';

import MapView, { Marker } from 'react-native-maps';



const MapTracking = () => {
  
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        region={{
          latitude: 6.4076,
          longitude: 7.5547,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}
        >
        

        
        
        <Marker
          // key={index}
          coordinate={{latitude: 6.4076, longitude: 7.5547}}
          title={"Your order is here"}
          // description={marker.description}
        />
      </MapView>
    </View>
  )
}

export default MapTracking