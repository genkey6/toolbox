import { Animals } from './components/Animals';
import { Zoos } from './components/Zoos';
import { UrqlProvider } from './graphql/UrqlProvider';

export function App() {
  return (
    <UrqlProvider>
      <Animals />
      <Zoos />
    </UrqlProvider>
  );
}

export default App;
