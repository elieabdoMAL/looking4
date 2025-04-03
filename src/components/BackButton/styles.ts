import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    top:0,
    width: 90,
    height: 80,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft:-20,
  },

  image1: {
    width: 28,
    height: 34,
    resizeMode: 'contain',
  },
  image2: {
    width: 23,
    height: 19,
    resizeMode: 'contain',
  },
});
