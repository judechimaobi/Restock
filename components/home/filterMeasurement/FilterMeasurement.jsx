import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './FilterMeasurement.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../../constants';
import Checkbox from 'expo-checkbox';



const FilterMeasurement = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  
  return (
    <View style={styles.container}>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>Measurement</Text>
      </View>


      <View style={styles.measurementRow}>
        <Text style={styles.rowText}>Gallon</Text>
        <View style={styles.checkBoxSection}>
          <Checkbox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)} style={styles.checkbox} />
        </View>
      </View>

      <View style={styles.measurementRow}>
        <Text style={styles.rowText}>Painter</Text>
        <View style={styles.checkBoxSection}>
          <Checkbox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)} style={styles.checkbox} />
        </View>
      </View>

      <View style={styles.measurementRow}>
        <Text style={styles.rowText}>Bottle</Text>
        <View style={styles.checkBoxSection}>
          <Checkbox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)} style={styles.checkbox} />
        </View>
      </View>

      <View style={styles.measurementRow}>
        <Text style={styles.rowText}>Kg</Text>
        <View style={styles.checkBoxSection}>
          <Checkbox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)} style={styles.checkbox} />
        </View>
      </View>

    </View>
  )
}

export default FilterMeasurement