import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors'; 

export default StyleSheet.create({
  rectangleImage: {
    width: '100%',
    height: 2,
    resizeMode: 'cover',
    marginTop: 10,
    marginBottom:20
  },

  footer: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 3.5,
  },
  footerSubtext: {
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  highlight: {
    color: Colors.black, // Or import from Colors if you have it
    letterSpacing: 1.4,
  },
});
