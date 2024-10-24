import React, { useState } from 'react';
import { View, Text, Image, Platform, Pressable, Dimensions } from 'react-native';
import styles from './PopularBundles.style';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { FONT, SIZES, COLORS } from "../../../constants";

const Slides = [
  {
    id: '1',
    name: 'Students pack',
    subtitle: 'For students',
    price: "3,900",
    image: require('../../../assets/images/bundle-students.png'),
  },
  {
    id: '2',
    name: 'Family pack',
    subtitle: 'For a family of 4',
    price: "3,900",
    image: require('../../../assets/images/bundle-large-family.png'),
  },
  {
    id: '3',
    name: 'Bachelor Pack',
    subtitle: 'carton',
    price: "3,900",
    image: require('../../../assets/images/bundle-odogwu.png'),
  },
  {
    id: '4',
    name: 'Big Family',
    subtitle: 'Family of 5',
    price: "3,900",
    image: require('../../../assets/images/bundle-family-of-4.png'),
  },
  {
    id: '5',
    name: 'Spinster  pack',
    subtitle: 'For Spinsters',
    price: "1,200",
    image: require('../../../assets/images/bundle-spinster.png'),
  },
  {
    id: '6',
    name: 'Nursing mom pack',
    subtitle: 'carton',
    price: "3,900",
    image: require('../../../assets/images/bundle-nursing-mom.png'),
  }
]


const favArray = [];
const BundleItems = ({ item, favourite, setFavourite, router }) => {  

  return (
    <Pressable style={styles.sectionBody}>
      <Image source={item.image}  style={[styles.image]}/>
      <View style={styles.productDetailBox}>
        <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.subtitle} numberOfLines={1}>{item.subtitle}</Text>
      </View>
      <View style={styles.sectionFooter}>
          <TouchableOpacity onPress={() => {setFavourite(item.id)}}>
            <Text style={styles.price} numberOfLines={1}>
              <Ionicons name='heart-outline' size={SIZES.xxLarge} style={styles.heartIcon(favourite, item)} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBtn} onPress={() => router.push({pathname: "/(tabs)/bundles"})}>
            <Ionicons name='eye' size={SIZES.xLarge / 2} style={styles.eyeIcon} />
            <Text style={styles.sectionBtnText}> View</Text> 
          </TouchableOpacity>
      </View>
    </Pressable>
  )
}


const PopularBundles = () => {
  
  const router = useRouter();
  const [favColor, setFavColor ] = useState(Slides.map(data => COLORS.gray));
  const [favourite, setFavourite ] = useState();

  const { width } = Dimensions.get('window');
  const ITEM_WIDTH = width * 0.8;

  return (
    <View style={styles.container}>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>Popular Bundles</Text>
        <TouchableOpacity style={styles.sectionHeaderBtn} onPress={()=> {router.push({pathname: "/(tabs)/bundles/"})}}>
          <Text style={styles.sectionHeaderBtnText}>See more</Text>
          <Ionicons name="chevron-forward" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      

        <FlatList
          data={Slides}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          bounces={true}
          keyExtractor={(item) => item.id}
          decelerationRate={Platform.OS === 'ios' ? 'fast' : 0.9}
          renderToHardwareTextureAndroid
          // snapToInterval={SIZES.xxLarge * 8}
          snapToInterval={ITEM_WIDTH}
          overScrollMode="never"
          scrollEventThrottle={16}

          renderItem={({ item, index }) => 
            <BundleItems
              router={router}
              item={item}
              favColor={favColor}
              setFavColor={setFavColor}
              favourite={favourite}
              setFavourite={setFavourite}
          />}
        />
    </View>
  )
}

export default PopularBundles