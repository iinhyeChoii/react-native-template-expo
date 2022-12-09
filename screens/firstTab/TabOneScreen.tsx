import { useContext } from 'react';
import { SafeAreaView, Switch, View } from 'react-native';
import { RootTabScreenProps } from '../../types';
import { ThemeContext, ThemeType } from '../../theme/Theme';
import {
  Container,
  Row,
  Text,
  Title,
} from '../../components/CommonStyledComponents';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const isDarkMode = theme === ThemeType.dark;

  return (
    <Container>
      <Row
        style={{ width: '100%', justifyContent: 'space-between', padding: 20 }}
      >
        <Text>Theme change</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </Row>
    </Container>
  );
}
