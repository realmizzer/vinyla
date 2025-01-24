import {StoreProvider} from './providers';
import {AppNavigation} from './routes';

export default function App() {
  return (
    <StoreProvider>
      <AppNavigation />
    </StoreProvider>
  );
}
