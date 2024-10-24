import React, { useRef } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ProfileDetails.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../../constants';



// const visible = useRef();

const ProfileDetails = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.profilePicSection}>
        <View style={styles.profilePicBox}>
          <Text style={styles.profilePicText}>JD</Text>
        </View>
        <Text style={styles.profileName}>John Dow</Text>
      </View>

      <View style={styles.walletSection}>
        <View style={styles.walletBox}>
          <TouchableOpacity style={styles.eyeBtn}>
            <Ionicons name='eye-outline' size={20} color={COLORS.white} />
          </TouchableOpacity>

          <View style={styles.walletInnerBox}>
            <Text style={styles.walletTitleText}>******</Text>
            <Text style={styles.walletSubtitleText}>Wallet balance</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.walletBox}>
          <TouchableOpacity style={styles.eyeBtn}>
            <Ionicons name='eye' size={20} color={COLORS.white} />
          </TouchableOpacity>

          
          <View style={styles.walletInnerBox}>
            <Text style={styles.walletTitleText}>1230</Text>
            <Text style={styles.walletSubtitleText}>Point balance</Text>
          </View>
        </View>
      </View>


      <View style={styles.actionBtnSection}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}><Ionicons name='add' /> Add money</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}><Ionicons name='send' /> Transfer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}><Ionicons name='pencil' /> Edit profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ProfileDetailsSection}>
        <Text style={styles.detailtext}><Ionicons name='location' /> No. 13 Ubaka Street, Enugu, Enugu State</Text>
        <View style={styles.lowerSection}>
          <Text style={styles.detailtext}><Ionicons name='call' /> 08192029102</Text>
          <Text style={styles.detailtext}><Ionicons name='mail' /> myprofileemail@gmail.com</Text>
        </View>
      </View>

    </View>
  )
}

export default ProfileDetails