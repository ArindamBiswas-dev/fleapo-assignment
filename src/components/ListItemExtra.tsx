import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import HeartIcon from '../assets/icons/heart.svg';

type ListItemExtraProps = {
  resturent: number;
  likes: number;
  nearby: number;
};

function ListItemExtra({
  resturent,
  likes,
  nearby,
}: ListItemExtraProps): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.subtitle, {color: colors.muted}]}>
        {resturent ? `${resturent} resturents` : 'resturent'}
      </Text>
      {nearby ? (
        <Text style={[styles.subtitle, {color: colors.success, marginLeft: 5}]}>
          {nearby} nearby
        </Text>
      ) : (
        <></>
      )}
      <View style={[styles.dot, {backgroundColor: colors.muted}]} />
      <HeartIcon style={styles.heartIcon} />
      <Text style={[styles.subtitle, {color: colors.muted}]}>
        {likes ? `${likes} likes` : 'No likes yet'}
      </Text>
    </View>
  );
}

export default ListItemExtra;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  dot: {
    height: 4,
    width: 4,
    borderRadius: 50,
    marginHorizontal: 6,
  },
  heartIcon: {
    marginRight: 5,
  },
});
