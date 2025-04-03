import React from 'react';
import { TouchableOpacity, Image, StyleProp, ViewStyle, ImageStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

interface BackButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  image1Style?: StyleProp<ImageStyle>;
  image2Style?: StyleProp<ImageStyle>;
}

const BackButton: React.FC<BackButtonProps> = ({ containerStyle, image1Style, image2Style }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={handlePress}>
      <Image
        source={require('../../../assets/Icon/icon4.png')}
        style={[styles.image1, image1Style]}
      />

      <Image
        source={require('../../../assets/Icon/backarrow.png')}
        style={[styles.image2, image2Style]}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
