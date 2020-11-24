import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Movies from '../pages/Movies';
import StaredMovies from '../pages/StaredMovies';

const AppRoutes = createStackNavigator();

const Routes: React.FC = () => (
  <AppRoutes.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#dcdde1' },
    }}
  >
    <AppRoutes.Screen name="Movies" component={Movies} />
    <AppRoutes.Screen name="StaredMovies" component={StaredMovies} />
  </AppRoutes.Navigator>
);

export default Routes;
