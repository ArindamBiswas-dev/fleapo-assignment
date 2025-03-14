import React from 'react';
import {StatusBar, View} from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar />
      <View style={{flex: 1, backgroundColor: '#1C1C1E'}}>
        <AppNavigator />
      </View>
    </>
  );
}

export default App;
