import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {StoreProvider} from './providers';

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Text>Hello, RN</Text>
      </NavigationContainer>
    </StoreProvider>
  );
}
