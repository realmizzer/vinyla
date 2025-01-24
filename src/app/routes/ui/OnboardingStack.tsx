import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '~/app/routes';
import {screenOptions} from '~/app/routes/config/options.ts';
import {SignIn} from '~/pages/signin/ui/SignIn.tsx';

const Stack = createStackNavigator();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.sign_in}
      screenOptions={screenOptions}>
      <Stack.Screen name={routes.sign_in} component={SignIn} />
    </Stack.Navigator>
  );
};
