import {React, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions, ScrollView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import { SIZES, COLORS, FONT, SHADOWS, } from "../../constants";

import styles from './bundles.style'



const Slides = [
  {
    id: '1',
    name: 'Newly married Couple Bundle', 
    qty: '1',
    unit: 'painter',
    price: "N45,000",
    image: require('../../assets/images/bundle-new-couple.png'),
  },
  {
    id: '2',
    name: 'Students Bundle',
    qty: '1',
    unit: 'tuber',
    price: "N25,500",
    image: require('../../assets/images/bundle-students.png'),
  },
  {
    id: '3',
    name: 'Bachalor Bundle',
    qty: '1',
    unit: 'bottle',
    price: "N30,500",
    image: require('../../assets/images/bundle-odogwu.png'),
  },
  {
    id: '4',
    name: 'Family of 4 Bundle',
    qty: '1',
    unit: 'pack',
    price: "N70,500",
    image: require('../../assets/images/bundle-family-of-4.png'),
  },
  {
    id: '5',
    name: 'Spinster',
    qty: '1',
    unit: 'tuber',
    price: "N50,000",
    image: require('../../assets/images/bundle-spinster.png'),
  },
  {
    id: '6',
    name: 'Single Mom Bundle',
    qty: '1',
    unit: 'bottle',
    price: "N33,900",
    image: require('../../assets/images/bundle-single-mom.png'),
  }
]


const width = (Dimensions.get('window').width - 4 * 10) / 2;

const BundleItems = ({ item, favColor, setFavColor }) => {


  return (
    <View style={styles.sectionBody}>
      <Image source={item.image}  style={[styles.image]}/>


      <View style={styles.sectionFooter}>
        <View style={styles.productDetailBox}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.price} numberOfLines={1}>{item.price}</Text>
        </View>

        <View style={styles.sectionBtnBox}>
            <TouchableOpacity style={styles.heartIcon} onPress={()=>{favColor == COLORS.gray ? setFavColor("red") : setFavColor(COLORS.gray) }}>
              <Ionicons name='heart-outline' size={30} color={favColor} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionBtn}>
              <Text style={styles.sectionBtnText}><Ionicons name='eye' size={14} /> View bundle</Text> 
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const Bundles = () => {

  const [favColor, setFavColor ] = useState(COLORS.gray);

  return (
    // <View style={styles.container}>
        <View style={styles.productContainer}>        
          {Slides.map((slide) => {            
            return <BundleItems key={slide.id} item={slide} favColor={favColor} setFavColor={setFavColor} />
          })}
        </View>
        
      // </View> 
    )
}



{/* <FlatList
          data={Slides}
          showsVerticalScrollIndicator={false}
          bounces={true}
          keyExtractor={(item) => item.id}
          decelerationRate={Platform.OS === 'ios' ? 0 : 0}
          renderToHardwareTextureAndroid
          scrollEventThrottle={32}

          renderItem={({ item, index }) => 
            <BundleItems
              item={item}
              favColor={favColor}
              setFavColor={setFavColor}
          />}
        /> */}




export default Bundles;