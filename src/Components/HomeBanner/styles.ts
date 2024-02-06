import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 18,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  bannerText: {
    flex: 3,
    justifyContent: 'center',
  },
  offerText: {
    color: colors.color3,
    fontWeight: 'bold',
    lineHeight: 25,
    fontSize: 18,
  },
  buyNowBtn: {
    width: '50%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    borderRadius: 100,
    marginTop: 10,
  },
  medicineImage: {
    height: 180,
    width: 180,
    position: 'absolute',
    right: -10,
    bottom: 20,
  },
});
export default styles;
