import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

import {HomeHeader} from '../../Components';
import LottieView from 'lottie-react-native';
import animations from '../../assets/animations';

const UnderConstruction = (props: any) => {
  const route = useRoute();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <HomeHeader isSearch={false} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 40,
        }}>
        <LottieView
          style={{
            height: 250,
            width: 250,
          }}
          source={animations.construction}
          autoPlay
          loop
        />
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {route.name}
          {`\nUnder construction`}
        </Text>
      </View>
    </View>
  );
};

export default UnderConstruction;
