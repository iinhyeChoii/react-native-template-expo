import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { ThemeContext, ThemeProvider, ThemeType } from './theme/Theme';
import { useContext } from 'react';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const { toggleTheme, theme } = useContext(ThemeContext);
  const isDarkMode = theme === ThemeType.dark;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
