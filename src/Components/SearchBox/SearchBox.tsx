import {View, TextInput, Image} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import Icons from '../../assets/icons';
import commonStyles from '../../theme/commonStyles';
interface SearchInterface {
  searchTxt: string;
  ht?: string;
  placeHolderTxt?: string;
}
const SearchBox: FC<SearchInterface> = ({
  searchTxt = '',
  ht = '25%',
  placeHolderTxt = 'Search',
}) => {
  return (
    <View style={[styles.searchContainer, commonStyles.shadow]}>
      <View style={styles.searchIconConatiner}>
        <Image style={{height: 25, width: 25}} source={Icons.searchIcon} />
      </View>
      <TextInput
        placeholderTextColor={'gray'}
        placeholder={placeHolderTxt}
        style={styles.inputBox}
      />
    </View>
  );
};

export default SearchBox;
