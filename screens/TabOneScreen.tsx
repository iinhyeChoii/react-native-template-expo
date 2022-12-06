import { StyleSheet, Switch } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { useContext } from 'react';
import { ThemeContext, ThemeType } from '../theme/Theme';
import { Container, Text, View } from '../components/CommonStyledComponents';
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const isDarkMode = theme === ThemeType.dark;

  return (
    <Container>
      <Switch value={isDarkMode} onValueChange={toggleTheme} />
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
