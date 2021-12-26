import { createStackNavigator } from '@react-navigation/stack';

import { LoadAssets } from './src/components/LoadAssets';
import { Examples } from './src/Examples';
import { Tarot, assets as tarotAssets } from './src/Tarot';

const assets = [...tarotAssets];
const fonts = {
  'SFProDisplay-Bold': require('./assets/fonts/SFPro/SF-Pro-Display-Bold.otf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SFPro/SF-Pro-Display-Semibold.otf'),
  'SFProDisplay-Regular': require('./assets/fonts/SFPro/SF-Pro-Display-Regular.otf'),
  'SFProDisplay-Medium': require('./assets/fonts/SFPro/SF-Pro-Display-Medium.otf'),
};

const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Playground'
      component={Examples}
      options={{
        title: 'Playground',
      }}
    />
    <Stack.Screen
      name='Tarot'
      component={Tarot}
      options={{
        title: 'Tarot',
        header: () => null,
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <LoadAssets assets={assets} fonts={fonts}>
      <AppNavigator />
    </LoadAssets>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
