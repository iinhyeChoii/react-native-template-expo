import { RootTabScreenProps } from '../../types';
import { Container, Title } from '../../components/CommonStyledComponents';
export default function TabThreeScreen({
  navigation,
}: RootTabScreenProps<'TabThree'>) {
  return (
    <Container>
      <Title>Tab Three Screen</Title>
    </Container>
  );
}
