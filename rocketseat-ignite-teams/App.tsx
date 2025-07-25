import {ThemeProvider} from "styled-components/native";
import {defaultTheme} from "./src/styles/themes.styled";
import {useFonts, Roboto_400Regular, Roboto_700Bold} from "@expo-google-fonts/roboto";
import {ActivityIndicator, StatusBar} from "react-native";
import Routes from "./src/routes/Routes";
import Home from "./src/screens/Home/Home";


export default function App() {
    const [isLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})


    return (
      <ThemeProvider theme={defaultTheme}>
          <StatusBar
              translucent
              backgroundColor={'transparent'}
              barStyle={'light-content'}
          />

          {isLoaded ? <Routes/> : <ActivityIndicator style={{flex: 1, backgroundColor: 'black', height: 200}}/>}

      </ThemeProvider>
    );
}

