import {useTheme} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';

function Card(): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/images/cobe.png')}
        style={styles.cardImage}
      />
      <Text style={{color: colors.text}}>Cobi's</Text>
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
  },
  cardImage: {
    width: '100%',
    height: 80,
    borderRadius: 12,
  },
});
