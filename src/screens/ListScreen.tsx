import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

function ListScreen(): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>List Screen</Text>
    </View>
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
