import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import commonStyles from '../../theme/commonStyles';
import Icons from '../../assets/icons';

const CategoryItem = ({title}: any) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, commonStyles.shadow]}>
        <Image style={{height: 25, width: 25}} source={Icons.spa} />
        <Text style={{color: 'black', fontWeight: '500', fontSize: 12, top: 5}}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default CategoryItem;
