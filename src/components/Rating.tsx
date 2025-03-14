import {StyleSheet, Text, View} from 'react-native';
import RatingBg from '../assets/icons/rating.svg';
import {useTheme} from '@react-navigation/native';

function Rating({rating}: {rating: number}): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <View style={styles.ratingContainer}>
      <RatingBg width={40} height={40} />
      <Text style={[styles.ratingText, {color: colors.text}]}>{rating}</Text>
    </View>
  );
}

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    position: 'absolute',
    fontFamily: 'AvenirNextLTPro-Regular',
  },
});
