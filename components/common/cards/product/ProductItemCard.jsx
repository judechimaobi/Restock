import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './productItemCard.style'

const ProductItemCard = () => {
  return (
    <View>
      <View>
        <TouchableOpacity>
          <Text>Grains</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View>

          <Text>Item 1</Text>
        </View>
      </View>
    </View>
  )
}

export default ProductItemCard;