import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

function HitListScreen(): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>HitList Screen</Text>
    </View>
  );
}

export default HitListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
