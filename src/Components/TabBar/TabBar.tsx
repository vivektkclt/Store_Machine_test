import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import commonStyles from '../../theme/commonStyles';
import styles from './styles';
import Icons from '../../assets/icons';
const TabBar = ({navigation}: any) => {
  const menus = [
    {name: 'Home', icon: Icons.home, screen: 'Home'},
    {name: 'Category', icon: Icons.category, screen: 'Categories'},
    {name: 'RX Upload', icon: Icons.uploadFile, screen: 'Rx'},
    {name: 'Profile', icon: Icons.person, screen: 'Profile'},
  ];
  return (
    <View style={[styles.container, commonStyles.shadow]}>
      {menus.map((item, index) => {
        return (
          <TouchableOpacity
            key={index.toString() + item}
            onPress={() => navigation.navigate(item?.screen)}
            style={styles.tabItem}>
            <Image
              style={{
                height: 18,
                width: 18,
                resizeMode: 'contain',
              }}
              source={item?.icon}
            />
            <Text style={{color: 'gray', fontSize: 13, fontWeight: '500'}}>
              {item?.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
