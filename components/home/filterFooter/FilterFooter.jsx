import React, { useState } from 'react';
import { View, Text, Image, Dimensions, useWindowDimensions } from 'react-native';
import styles from './FilterFooter.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../../constants';
import Checkbox from 'expo-checkbox';

// const fullWidth = useWindowDimensions('width');

const FilterFooter = () => {
  const { width } = useWindowDimensions();
  
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  
  return (
    <View style={styles.container}>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.clearBtn(width)}>
          <Text style={styles.clearBtnText}>Clear</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.showBtn(width)}>
          <Text style={styles.showBtnText}>Show 75 items</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FilterFooter