import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  searchContainer: {
    borderRadius: 16,
    height: 65,
    flexDirection: 'row',
    backgroundColor: colors.color3,
    alignItems: 'center',
    width: '99%',
    alignSelf: 'center',
  },
  searchIconConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignContent: 'center',
  },
  inputBox: {
    flex: 7,
    height: '90%',
    fontSize: 15,
    alignItems: 'center',
    marginLeft: 12,
    color: 'black',
  },
});
export default styles;
