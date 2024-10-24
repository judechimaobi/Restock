import React from 'react'
import { View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Redirect, useRouter, Link } from 'expo-router';
import { COLORS, SIZES } from "../../../constants";

import styles from './Search.style'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Search = () => {
  const router = useRouter();
  

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={SIZES.large} color={COLORS.gray} />
          <TextInput style={styles.searchInput} placeholder='Search item' />
        </View>

        <TouchableOpacity style={styles.filterBtn} onPress={() => {router.push({pathname: "/(tabs)/home/filter"})}}>
          <Ionicons name='filter' size={SIZES.large} color={COLORS.white} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Search