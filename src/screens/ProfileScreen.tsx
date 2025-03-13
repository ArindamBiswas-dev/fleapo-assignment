import {useTheme} from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../components/Button';
import Hr from '../components/Hr';
import Card from '../components/Card';

function ProfileScreen(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {backgroundColor: colors.background, paddingTop: insets.top, flex: 1},
      ]}>
      <ImageBackground
        style={styles.heroImage}
        source={require('../assets/images/map_banner.png')}>
        <LinearGradient
          colors={['#00000000', colors.background]}
          style={styles.linearGradient}
        />
      </ImageBackground>
      <View style={styles.aboutContainer}>
        <View style={styles.aboutTextContainer}>
          <Text style={[styles.username, {color: colors.text}]}>
            kumargauravof
          </Text>
          <Text style={[styles.name, {color: colors.text}]}>Kumar Gaurav</Text>
          <Text style={[styles.location, {color: colors.muted}]}>
            Los Angeles, CA
          </Text>
          <View style={styles.buttonContainer}>
            <Button height={40} width={102} label="Follow" onPress={() => {}} />
          </View>
        </View>
        <Image
          source={require('../assets/images/profile_avatar.png')}
          style={styles.profileAvatar}
          resizeMode="contain"
        />
      </View>
      <Hr />
      <View style={styles.top8Container}>
        <Text style={[styles.topHeading, {color: colors.text}]}>
          Gaurav's Top 8
        </Text>
        <View style={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroImage: {
    width: '100%',
    height: 300,
  },
  linearGradient: {
    marginTop: 'auto',
    height: '70%',
    width: '100%',
  },
  aboutContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 15,
  },
  aboutTextContainer: {
    gap: 6,
  },
  username: {
    fontSize: 14,
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  name: {
    fontSize: 28,
    fontWeight: '600',
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  location: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  profileAvatar: {
    width: 96,
    height: 96,
    borderWidth: 3,
    borderRadius: 50,
  },
  buttonContainer: {
    marginTop: 20,
  },
  top8Container: {
    padding: 15,
    gap: 15,
  },
  topHeading: {
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
});
