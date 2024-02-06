import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  CategoryItem,
  HomeBanner,
  HomeHeader,
  ProductCard,
} from '../../Components';
import SearchBox from '../../Components/SearchBox/SearchBox';

const Home = () => {
  const Categories = ['Wellness', 'Brand Deals', 'Homeo', 'Eye Care'];
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json.splice(0, 4));
      });
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 55, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <HomeHeader />
      <SearchBox searchTxt="" />
      <HomeBanner />
      <Text style={styles.sectionTitle}>Top Categories</Text>
      <View
        style={{
          marginTop: 10,
          height: 100,
        }}>
        <FlatList
          data={Categories}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(index, item) => index + item}
          renderItem={({item, index}) => {
            return <CategoryItem title={item} />;
          }}
        />
      </View>
      <Text style={styles.sectionTitle}>DSF Special Deals</Text>
      <FlatList
        data={products}
        contentContainerStyle={{marginTop: 10}}
        numColumns={2}
        keyExtractor={({index, item}) => item?.id}
        renderItem={({item, index}) => {
          return <ProductCard index={index} item={item} />;
        }}
      />
    </ScrollView>
  );
};

export default Home;
