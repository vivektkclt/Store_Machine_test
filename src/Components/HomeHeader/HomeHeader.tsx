import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Icons from '../../assets/icons';
import colors from '../../theme/colors';
import commonStyles from '../../theme/commonStyles';
import SearchBox from '../SearchBox/SearchBox';

const HomeHeader = ({isSearch = true}: any) => {
  return (
    <View style={styles.topView}>
      <View
        style={[
          styles.lcnCarIcon,
          commonStyles.shadow,
          {backgroundColor: colors.color1},
        ]}>
        <Image
          style={{height: 30, width: 30, resizeMode: 'contain'}}
          source={Icons.location}
        />
      </View>
      <View style={styles.lcnName}>
        <Text style={{color: colors.color2}}>Delivery Address</Text>
        <Text style={styles.addressTxt}>12 Rich Terrace,Wigram, NZ</Text>
      </View>
      <View style={[styles.lcnCarIcon, commonStyles.shadow]}>
        <Image style={styles.iconStyle} source={Icons.cartIcon} />
      </View>
    </View>
  );
};

export default HomeHeader;
