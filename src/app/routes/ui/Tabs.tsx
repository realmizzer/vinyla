import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from '~/app/routes/config/paths.ts';
import {FavoriteStack} from './FavoriteStack.tsx';
import {ProfileStack} from './ProfileStack.tsx';
import {RoomsStack} from './RoomsStack.tsx';
import {SettingsStack} from './SettingsStack.tsx';
import {TasteStack} from './TasteStack.tsx';

const BottomTabs = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <BottomTabs.Navigator initialRouteName={routes.favorite}>
      <BottomTabs.Screen name={routes.rooms} component={RoomsStack} />
      <BottomTabs.Screen name={routes.taste} component={TasteStack} />
      <BottomTabs.Screen name={routes.favorite} component={FavoriteStack} />
      <BottomTabs.Screen name={routes.profile} component={ProfileStack} />
      <BottomTabs.Screen name={routes.settings} component={SettingsStack} />
    </BottomTabs.Navigator>
  );
};
