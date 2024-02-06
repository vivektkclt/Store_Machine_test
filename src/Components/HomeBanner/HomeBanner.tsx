import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../../theme/commonStyles';
import Icons from '../../assets/icons';
const HomeBanner = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.2, y: 0.25}}
        end={{x: 1, y: 1.0}}
        locations={[0, 0.5, 0.6]}
        colors={['#C64C98', '#26328C', '#26328C']}
        style={[styles.container, commonStyles.shadow]}>
        <View style={styles.bannerText}>
          <Text style={styles.offerText}>
            {`Get flat `}
            <Text style={{color: '#FFF100'}}>25% </Text>
            {`off\n on all medicines`}
          </Text>
          <View style={styles.buyNowBtn}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Buy Now</Text>
          </View>
        </View>
        <ImageBackground
          source={Icons.bags}
          style={{flex: 2, paddingRight: 20}}></ImageBackground>
        <View style={{flex: 1}} />
        <Image style={styles.medicineImage} source={Icons.medicine} />
      </LinearGradient>
    </View>
  );
};

export default HomeBanner;
