import Navbar from "./Global Components/Navbar/Navbar.tsx";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "./styles/theme.ts";
import {GlobalStyle} from "./styles/GlobalStyle.styled.ts";
import Home from "./Pages/Home/Home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserContextProvider from "./Context/UserContextProvider.tsx";
import Success from "./Pages/Success/Success.tsx";
import ProtectedRoute from "./Pages/ProtectedRoute.tsx";
import Checkout from "./Pages/Checkout/Checkout.tsx";

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
            <UserContextProvider>
                <Navbar/>
                <Routes>
                    <Route index element={<Home/>}/>

                    <Route path={'/checkout/*'} element={<ProtectedRoute>
                        <Routes>
                            <Route index element={<Checkout/>}/>
                            <Route path={'success'} element={<Success/>}/>
                        </Routes>
                    </ProtectedRoute>}/>
                </Routes>
            </UserContextProvider>
        </BrowserRouter>
        <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
