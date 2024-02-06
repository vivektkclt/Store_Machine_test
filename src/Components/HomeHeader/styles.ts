import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  topView: {
    height: 70,
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  lcnCarIcon: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: 'white',
  },
  lcnName: {
    flex: 5,
    paddingLeft: 10,
    paddingRight: 15,
    justifyContent: 'center',
  },
  addressTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.color2,
  },
  iconStyle: {height: 30, width: 30, resizeMode: 'contain'},
});
export default styles;
