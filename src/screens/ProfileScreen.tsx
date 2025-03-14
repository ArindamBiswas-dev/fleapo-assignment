import {useTheme} from '@react-navigation/native';
import {
  Dimensions,
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
import ListItem from '../components/ListItem';
import {LineChart} from 'react-native-gifted-charts';
import {LIST, RECENT_ACTIVITY, TOP_8} from '../utils/data';
import Rating from '../components/Rating';
import ListItemExtra from '../components/ListItemExtra';
import ProfileIcon from '../assets/icons/profile2.svg';
import HitlistIcon from '../assets/icons/hitlist2.svg';
import HeartIcon from '../assets/icons/heart.svg';

const data = [
  {value: 0},
  {value: 3.2},
  {value: 2.5},
  {value: 3.9},
  {value: 7.4},
  {value: 8.5},
  {value: 6.7},
  {value: 0},
];

function ProfileScreen(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          {backgroundColor: colors.background, paddingTop: insets.top},
        ]}
        showsVerticalScrollIndicator={false}>
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
            <Text style={[styles.name, {color: colors.text}]}>
              Kumar Gaurav
            </Text>
            <Text style={[styles.location, {color: colors.muted}]}>
              Los Angeles, CA
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                height={40}
                width={102}
                label="Follow"
                leftIcon={<HeartIcon />}
                onPress={() => {}}
              />
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
            {TOP_8.map((value, index) => (
              <Card
                title={value.title}
                imageUrl={value.pic}
                rating={value.rating}
                key={value.title}
              />
            ))}
          </View>
        </View>
        <Hr />
        <View style={styles.top8Container}>
          <Text style={[styles.topHeading, {color: colors.text}]}>
            Recent Activity
          </Text>
          <View>
            {RECENT_ACTIVITY.map((values, index) => (
              <ListItem
                key={values.title}
                avatarShape="square"
                title={values.title}
                subtitles={values.subtitle}
                profile_pic={values.pic}
                rightSectionExtraItem={
                  values.rating ? <Rating rating={values.rating} /> : <></>
                }
              />
            ))}
          </View>
          <Button
            width={'100%'}
            height={40}
            label="See more"
            onPress={() => {}}
          />
        </View>
        <View style={styles.top8Container}>
          <LineChart
            data={data}
            height={120}
            color="red"
            thickness={2}
            rulesType="dashed"
            dashWidth={2}
            rulesColor="rgba(255,255,255,0.3)"
            hideYAxisText
            yAxisLabelTexts={['0.0', '7.5', '10.0']}
            noOfSections={2}
            yAxisExtraHeight={10}
            yAxisColor="transparent"
            xAxisColor="transparent"
            areaChart
            startFillColor="red"
            endFillColor="transparent"
            startOpacity={0.3}
            endOpacity={0.1}
            hideDataPoints
            dataPointsColor="black"
            dataPointsRadius={6}
            isAnimated
            initialSpacing={10}
            rulesLength={Dimensions.get('window').width - 44}
            pointerConfig={{
              showPointerStrip: true,
              pointerStripColor: 'red',
              pointerStripWidth: 2,
            }}
          />
        </View>
        <Hr />
        <View style={styles.top8Container}>
          <Text style={[styles.topHeading, {color: colors.text}]}>Lists</Text>
          <View>
            {LIST.map((value, index) => (
              <ListItem
                key={value.title}
                title={value.title}
                subtitles={[value.subtitle]}
                profile_pic={value.pic}
                subtitleExtraSection={
                  <ListItemExtra
                    resturent={value.resturents}
                    likes={value.likes}
                    nearby={value.nearby}
                  />
                }
              />
            ))}
          </View>
          <Button
            width={'100%'}
            height={40}
            label="See more"
            onPress={() => {}}
          />
        </View>
        <Hr />
        <View style={styles.top8Container}>
          <ListItem
            title="Following"
            profile_icon={<ProfileIcon />}
            rightSectionExtraItem={<Text style={{color: colors.text}}>3</Text>}
          />
          <ListItem
            title="Hitlist"
            profile_icon={<HitlistIcon style={{marginLeft: 5}} />}
            rightSectionExtraItem={<Text style={{color: colors.text}}>3</Text>}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexGrow: 1,
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
