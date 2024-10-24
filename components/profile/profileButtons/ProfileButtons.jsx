import React, { useState } from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import styles from './ProfileButtons.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';


const ProfileButtons = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name='people-outline' size={20} />
        <Text style={styles.menuItemText}>Refer & Earn</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name='shield-outline' size={20} />
        <Text style={styles.menuItemText}>Privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name='log-out-outline' size={20} />
        <Text style={styles.menuItemText}>Log out</Text>
      </TouchableOpacity>
    </View>

  )
}

export default ProfileButtons