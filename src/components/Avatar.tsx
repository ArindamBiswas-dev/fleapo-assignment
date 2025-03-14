import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';

type AvatarProps = {
  imageUrl: string;
  alt?: string;
  avatarShape?: 'rounded' | 'square';
};

function Avatar({
  imageUrl,
  avatarShape = 'rounded',
}: AvatarProps): React.JSX.Element {
  console.log(imageUrl);
  return (
    <Image
      source={imageUrl as ImageSourcePropType}
      style={[
        styles.avatar,
        {borderRadius: avatarShape === 'rounded' ? 50 : 8},
      ]}
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
