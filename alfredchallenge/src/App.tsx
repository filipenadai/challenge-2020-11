import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { StarProvider } from './hooks/star';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#dcdde1" />
    <StarProvider>
      <View style={{ flex: 1, backgroundColor: '#dcdde1' }}>
        <Routes />
      </View>
    </StarProvider>
  </NavigationContainer>
);

export default App;
