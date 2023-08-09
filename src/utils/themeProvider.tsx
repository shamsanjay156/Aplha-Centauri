import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const themeProvider = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: isDarkMode ? Colors.lighter : Colors.darker,
    tabIconActive: isDarkMode ? '#047BD5' : '#047BD5',
    tabIconInactive: isDarkMode ? 'white' : 'grey',
  };

  return {themeProvider};
};
export default useTheme;
