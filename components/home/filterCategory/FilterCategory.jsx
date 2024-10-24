import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './FilterCategory.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../../constants';



const FilterCategory = () => {
  const [selected, setSelected] = useState(false);

  const controlBtns = () => {
    if (selected) {
      setSelected(false)
    }
    if (!selected) {
      
      setSelected(true)
    }
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>Category</Text>
        {/* <TouchableOpacity style={styles.sectionHeaderBtn}>
          <Text style={styles.sectionHeaderBtnText}>See more <Ionicons name="chevron-forward" /></Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.categoryBtnBox}>
        <TouchableOpacity style={styles.categoryBtn(selected)} onPress={controlBtns}>
          <Text style={styles.categoryBtnText(selected)}>Grains</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn(selected)} onPress={controlBtns}>
          <Text style={styles.categoryBtnText(selected)}>Beverages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn(selected)} onPress={controlBtns}>
          <Text style={styles.categoryBtnText(selected)}>Vegetables</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn(selected)} onPress={controlBtns}>
          <Text style={styles.categoryBtnText(selected)}>Toiletries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn(selected)} onPress={controlBtns}>
          <Text style={styles.categoryBtnText(selected)}>Sachet food</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn(selected)} onPress={controlBtns}>
          <Text style={styles.categoryBtnText(selected)}>Tubers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn(selected)} onPress={controlBtns}>
          <Text style={styles.categoryBtnText(selected)}>Fruits</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default FilterCategory