import { RootTabScreenProps } from '../../types';
import { Container, Title } from '../../components/CommonStyledComponents';
export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<'TabTwo'>) {
  return (
    <Container>
      <Title>Tab Two Screen</Title>
    </Container>
  );
}
