import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  createStaticNavigation,
  useLinkBuilder,
  useTheme,
} from '@react-navigation/native';
import {Text} from '@react-navigation/elements';
import PeopleScreen from '../screens/PeopleScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import theme from '../utils/theme';
import HList2Icon from '../assets/icons/hitlist2.svg';
import MapIcon from '../assets/icons/map.svg';
import MapScreen from '../screens/MapScreen';
import ListScreen from '../screens/ListScreen';
import HitListScreen from '../screens/HitListScreen';
import Profile3Icon from '../assets/icons/profile3.svg';
import ListIcon from '../assets/icons/list.svg';

function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {colors} = useTheme();
  const {buildHref} = useLinkBuilder();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.tabBar,
        {paddingBottom: insets.bottom + 20, backgroundColor: colors.background},
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        console.log(options);
        const TabBarIcon = options.tabBarIcon;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}>
            {TabBarIcon({
              focused: isFocused,
              color: isFocused ? colors.focus : colors.text,
              size: 24,
            })}
            <Text
              style={[
                {color: isFocused ? colors.text : colors.muted},
                styles.tabBarLabel,
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const MyTabs = createBottomTabNavigator({
  tabBar: props => <MyTabBar {...props} />,
  screens: {
    Map: MapScreen,
    People: PeopleScreen,
    List: ListScreen,
    HitList: HitListScreen,
    Profile: ProfileScreen,
  },
  screenOptions: ({route}) => ({
    headerShown: false,
    tabBarIcon: ({focused, color, size}) => {
      if (route.name === 'Profile') {
        return (
          <Image
            source={require('../assets/images/profile_avatar.png')}
            style={styles.profileImage}
          />
        );
      } else if (route.name === 'People') {
        return <Profile3Icon color={color} />;
      } else if (route.name === 'Map') {
        return <MapIcon color={color} />;
      } else if (route.name === 'HitList') {
        return <HList2Icon fill={color} />;
      } else if (route.name === 'List') {
        return <ListIcon color={color} />;
      } else {
        return <Profile3Icon color={color} />;
      }
    },
    tabBarActiveTintColor: 'red',
    tabBarLabelStyle: {
      fontFamily: 'AvenirNextLTPro-Regular',
    },
  }),
});
const Navigation = createStaticNavigation(MyTabs);
const isDarkTheme = true;

function AppNavigator(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Navigation theme={isDarkTheme ? theme.DarkTheme : theme.LightTheme} />
    </SafeAreaProvider>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    padding: 4,
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 8,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  tabBarLabel: {
    textTransform: 'uppercase',
    fontSize: 8,
    letterSpacing: 0.8,
  },
  profileImage: {height: 25, width: 25, borderWidth: 2, borderRadius: 16},
});
