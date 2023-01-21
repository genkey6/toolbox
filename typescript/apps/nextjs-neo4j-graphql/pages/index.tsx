import { UrqlProvider } from '../graphql/UrqlProvider';
import { Animals } from '../components/Animals';
import { Zoos } from '../components/Zoos';

export function Index() {
  return (
    <UrqlProvider>
      <Animals />
      <Zoos />
    </UrqlProvider>
  );
}

export default Index;
