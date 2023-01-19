import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";
import {
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
} from '@expo-google-fonts/inter';




export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fontsLoaded){
    return (
        <Loading />
    )
  }

  return (
    <>
     <Home />
      <StatusBar style="light" backgroundColor='transparent' translucent/>
    </>
  );
}

