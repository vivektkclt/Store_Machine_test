import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

import {TabBar} from '../Components';
import {Home, ProductDetails, UnderConstruction} from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => {
          return (
            <View
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TabBar {...props} />
            </View>
          );
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ProductDetails" component={ProductDetails} />
        <Tab.Screen name="Categories" component={UnderConstruction} />
        <Tab.Screen name="Rx" component={UnderConstruction} />
        <Tab.Screen name="Profile" component={UnderConstruction} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
