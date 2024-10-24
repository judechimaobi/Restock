import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import styles from './FilterRating.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../../constants';



const FilterCategory = () => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>Customer rating</Text>
        {/* <TouchableOpacity style={styles.sectionHeaderBtn}>
          <Text style={styles.sectionHeaderBtnText}>See more <Ionicons name="chevron-forward" /></Text>
        </TouchableOpacity> */}
      </View>
      
      <View style={styles.ratingRow}>
        <View style={styles.ratingStarSection}>
          <View style={styles.ratingStarBox}>
            <Ionicons name="star" size={20} style={styles.ratingStar} />
            <Ionicons name="star" size={20} style={styles.ratingStar} />
            <Ionicons name="star" size={20} style={styles.ratingStar} />
            <Ionicons name="star" size={20} style={styles.ratingStar} />
            <Ionicons name="star" size={20} style={styles.ratingStar} />
          </View>
        </View>
        <View style={styles.checkBoxSection}>
          <Checkbox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.checkbox}
          />
        </View>
      </View>

      <View style={styles.ratingRow}>
        <View style={styles.ratingStarSection}>
          <View style={styles.ratingStarBox}>
            <Ionicons name="star" size={20} style={styles.ratingStar} />
            <Ionicons name="star" size={20} style={styles.ratingStar} />
            <Ionicons name="star" size={20} style={styles.ratingStar} />
            <Ionicons name="star" size={20} style={styles.ratingStar} />
          </View>
        </View>

        <View style={styles.checkBoxSection}>
          <Checkbox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.checkbox}
          />
        </View>
      </View>

      <View style={styles.ratingRow}>
        <View style={styles.ratingStarSection}>
          <View style={styles.ratingStarBox}>
            <Ionicons name="star" size={20} style={styles.ratingStar} />
            <Ionicons name="star" size={20} style={styles.ratingStar} />
            <Ionicons name="star" size={20} style={styles.ratingStar} />
          </View>
        </View>

        <View style={styles.checkBoxSection}>
          <Checkbox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.checkbox}
          />
        </View>
      </View>

      <View style={styles.ratingRow}>
        <View style={styles.ratingStarSection}>
          <View style={styles.ratingStarBox}>
            <Ionicons name="star" size={20} style={styles.ratingStar} />
            <Ionicons name="star" size={20} style={styles.ratingStar} />
          </View>
        </View>

        <View style={styles.checkBoxSection}>
          <Checkbox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.checkbox}
          />
        </View>
      </View>

      <View style={styles.ratingRow}>
        <View style={styles.ratingStarSection}>
          <View style={styles.ratingStarBox}>
            <Ionicons name="star" size={20} style={styles.ratingStar} />
          </View>
        </View>

        <View style={styles.checkBoxSection}>
          <Checkbox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.checkbox}
          />
        </View>
      </View>
    </View>
  )
}

export default FilterCategory