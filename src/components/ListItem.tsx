import {StyleSheet, Text, View} from 'react-native';
import Avatar from './Avatar';
import {useTheme} from '@react-navigation/native';

function ListItem(): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <View style={styles.listItem}>
      <Avatar imageUrl={'../assets/images/avatar1.png'} />
      <View style={styles.textContainer}>
        <Text style={[styles.title, {color: colors.text}]}>CaptainCrunch</Text>
        <Text style={[styles.subtitle, {color: colors.muted}]}>
          Los Angeles, CA
        </Text>
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(50, 50, 52, 1)',
  },
  textContainer: {
    marginLeft: 15,
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'AvenirNextLTPro-Regular',
  },
});
