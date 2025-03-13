import {Image, StyleSheet, View} from 'react-native';

type AvatarProps = {
  imageUrl: string;
  alt?: string;
};

function Avatar({imageUrl}: AvatarProps): React.JSX.Element {
  console.log(imageUrl);
  return (
    <Image
      source={require('../assets/images/avatar1.png')}
      style={styles.avatar}
    />
  );
}

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
  },
});
