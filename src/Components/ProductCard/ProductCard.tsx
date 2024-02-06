import {View, Text, Image} from 'react-native';
import React from 'react';
import getColor from '../../util/colorSelector';

const ProductCard = ({item = {}, index = 1}: any) => {
  return (
    <View
      style={{
        width: '50%',
        height: 180,
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          height: '92%',
          backgroundColor: getColor(index),
          borderRadius: 30,
          padding: 10,
        }}>
        <Text numberOfLines={2} style={{color: 'black', fontWeight: '500'}}>
          {item?.title}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View style={{width: '70%', padding: 10, paddingLeft: 0}}>
            <Text style={{color: 'grey'}}>950 mg</Text>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              AED {' ' + item?.price}
            </Text>
          </View>
          <Image
            source={{uri: item?.image}}
            style={{
              position: 'absolute',
              height: 70,
              width: 60,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
