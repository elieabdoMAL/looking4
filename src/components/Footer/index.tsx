import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Footer: React.FC = () => {
  return (
    <View>
      {/* Rectangle Image */}
      <Image
        style={styles.rectangleImage}
        source={require('../../../assets/WelcomePage/Rectangle 73.png')}
      />

      {/* Footer Text */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Plus de <Text style={styles.highlight}>2 millions</Text>
          {'\n'}d'utilisateurs actifs
        </Text>
        <Text style={styles.footerSubtext}>
          Application 100% Québécoise
        </Text>
      </View>
    </View>
  );
};

export default Footer;
