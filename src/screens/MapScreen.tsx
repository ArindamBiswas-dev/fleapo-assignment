import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

function MapScreen(): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Map Screen</Text>
    </View>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
