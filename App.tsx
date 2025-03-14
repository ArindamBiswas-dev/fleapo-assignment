import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';
  const isDarkTheme = true;

  return (
    <>
      <StatusBar />
      <View style={{flex: 1, backgroundColor: '#1C1C1E'}}>
        <AppNavigator />
      </View>
    </>
  );

  // return (
  //   <SafeAreaProvider>
  //     <SafeAreaView edges={['bottom', 'left', 'right']}>
  //       <NavigationContainer>
  //         <View style={{flex: 1}}>
  //           <StatusBar
  //             barStyle={isDarkMode ? 'light-content' : 'dark-content'}
  //             backgroundColor={backgroundStyle.backgroundColor}
  //           />
  //           <ScrollView contentContainerStyle={{flexGrow: 1}}>
  //             <View style={{paddingRight: safePadding}}>
  //               <Header />
  //             </View>
  //             <View
  //               style={{
  //                 backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //                 paddingHorizontal: safePadding,
  //                 paddingBottom: safePadding,
  //               }}>
  //               <AppNavigator />
  //             </View>
  //           </ScrollView>
  //         </View>
  //       </NavigationContainer>
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  // );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
