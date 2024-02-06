import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Navigation from './src/Navigation';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Navigation />
    </View>
  );
};

export default App;
