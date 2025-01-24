import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '~/app/routes';
import {screenOptions} from '~/app/routes/config/options.ts';
import {OnboardingStack} from './OnboardingStack.tsx';
import {Tabs} from './Tabs.tsx';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  const isAuth = false;
  const initialRouteName = isAuth ? routes.tabs : routes.onboarding;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={screenOptions}>
        <Stack.Screen name={routes.onboarding} component={OnboardingStack} />
        <Stack.Screen name={routes.tabs} component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
