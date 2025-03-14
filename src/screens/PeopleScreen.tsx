/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import {useState} from 'react';
import {
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SceneMap, TabView} from 'react-native-tab-view';

const renderScene = SceneMap({
  friends: FriendsList,
  verified: VerifiedList,
  everyone: EveryoneList,
});

function FriendsList(): React.JSX.Element {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.hr} />
      <ScrollView
        contentContainerStyle={styles.listContainer}
        horizontal={false}
        showsVerticalScrollIndicator={false}>
        {PEOPLE_FRIENDS.map((value, index) => (
          <ListItem
            key={value.username}
            profile_pic={value.pic}
            title={value.username}
            subtitles={[value.location]}
            isPreamimum={value.premimun}
            isFriend={true}
          />
        ))}
      </ScrollView>
      <SearchInput />
    </View>
  );
}
function VerifiedList(): React.JSX.Element {
  const {colors} = useTheme();
  return (
    <View style={styles.otherTabContainer}>
      <Text style={{color: colors.text, textAlign: 'center'}}>
        Verified List
      </Text>
    </View>
  );
}
function EveryoneList(): React.JSX.Element {
  const {colors} = useTheme();
  return (
    <View style={styles.otherTabContainer}>
      <Text style={{color: colors.text, textAlign: 'center'}}>
        Everyone List
      </Text>
    </View>
  );
}

import type {SceneRendererProps, NavigationState} from 'react-native-tab-view';
import ListItem from '../components/ListItem';
import SearchInput from '../components/SearchInput';
import {PEOPLE_FRIENDS} from '../utils/data';

const renderTabBar = (
  props: SceneRendererProps & {
    navigationState: NavigationState<{key: string; title: string}>;
  },
) => (
  <View style={styles.tabbar}>
    {props.navigationState.routes.map((route, index) => {
      return (
        <TouchableWithoutFeedback
          key={route.key}
          onPress={() => props.jumpTo(route.key)}>
          {renderItem(props)({route, index})}
        </TouchableWithoutFeedback>
      );
    })}
  </View>
);

const renderItem =
  ({
    navigationState,
  }: {
    navigationState: NavigationState<{key: string; title: string}>;
  }) =>
  ({route, index}: {route: {key: string; title: string}; index: number}) => {
    const activeOpacity = navigationState.index === index;

    return (
      <View
        key={route.key}
        style={[styles.tab, activeOpacity ? styles.activeTabItem : {}]}>
        <Animated.View style={[]}>
          <Text style={[styles.label]}>{route.title}</Text>
        </Animated.View>
      </View>
    );
  };

function TabSection(): React.JSX.Element {
  const layout = useWindowDimensions();

  const [tabIndex, setTabIndex] = useState<number>(0);
  const [tabRoutes] = useState([
    {key: 'friends', title: 'Friends'},
    {key: 'verified', title: 'Verified'},
    {key: 'everyone', title: 'Everyone'},
  ]);

  return (
    <TabView
      navigationState={{index: tabIndex, routes: tabRoutes}}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setTabIndex}
      initialLayout={{width: layout.width}}
    />
  );
}

function PeopleScreen(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}>
      <Text style={[styles.heading, {color: colors.text}]}>People</Text>
      <TabSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // paddingHorizontal: 15,
    gap: 20,
    position: 'relative',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'AvenirNextLTPro-Bold',
    textShadowColor: 'rgba(0, 0, 0, 1)', // Dark shadow color
    textShadowOffset: {width: -3, height: 2}, // Shadow position
    textShadowRadius: 5, // Blur effect
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'AvenirNextLTPro-Bold',
    // color: 'white',
    // textShadowColor: 'black',
    // textShadowOffset: {width: -1, height: -1}, // Top-left shadow
    // textShadowRadius: 1,
    // shadowOpacity: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    borderRadius: 16,
  },
  activeTabItem: {
    backgroundColor: 'white',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    marginTop: 10,
    // shadowColor: 'red',
    // shadowOpacity: 0.26,
    // shadowOffset: {width: 0, height: -5},
    // shadowRadius: 16,
    // elevation: 10,
    // backgroundColor: 'white',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 3,
    borderBottomWidth: 4,
    marginHorizontal: 15,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 16,
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  hr: {
    flex: 0,
    height: 3,
    width: '100%',
    backgroundColor: 'rgba(50, 50, 52, 1)',
  },
  tabContainer: {
    flex: 1,
    marginTop: 20,
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  otherTabContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default PeopleScreen;
