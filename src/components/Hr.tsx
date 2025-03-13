import {StyleSheet, View} from 'react-native';

function Hr(): React.JSX.Element {
  return <View style={styles.hr} />;
}

export default Hr;

const styles = StyleSheet.create({
  hr: {
    flex: 0,
    height: 3,
    width: '100%',
    backgroundColor: 'rgba(50, 50, 52, 1)',
  },
});
