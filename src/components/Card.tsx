import {useTheme} from '@react-navigation/native';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Rating from './Rating';

type CardPropType = {
  title: string;
  imageUrl: string;
  rating: number;
};

function Card({title, imageUrl, rating}: CardPropType): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <View style={styles.card}>
      <ImageBackground
        source={imageUrl as ImageSourcePropType}
        style={styles.cardImage}>
        <Rating rating={rating} />
      </ImageBackground>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          color: colors.text,
          fontWeight: '600',
          fontFamily: 'AvenirNextLTPro-Regular',
        }}>
        {title}
      </Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 81.25,
    // height: 80,
    borderRadius: 12,
    gap: 5,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: 80,
    borderRadius: 12,
  },
});
