import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";

// import Layout from "./components/layout/Layout";
import ScrollTop from "./components/elements/scrollTo/ScrollTop";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import AdsContent from "./components/ads/AdsContent";
import AdDetails from "./components/ads/AdDetails";
import NotFound from "./components/layout/NotFound";
import AdNew from "./components/ads/AdNew";
import UserProfile from "./components/user/UserProfile";
import RequireAuth from "./components/requireAuth/RequireAuth"
import { AuthContextProvider } from "./components/context"

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="App">
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
        <ScrollTop />
        <Routes>
          {/* Rutas generales */}
          <Route path="/" element={<Navigate to="/adverts" />} />
          <Route path="/adverts" element={<AdsContent />} />
          <Route path="/adverts/:adsId" element={<AdDetails />} />

          {/* Hay que proteger RUTAS. NO OLVIDAR!! */}
          
            {/*<Route path="/new"  element={<RequireAuth> <AdNew /> </RequireAuth>} />*/}
            <Route path="/new"  element={ <RequireAuth><AdNew /></RequireAuth> } />
            <Route path="/user-profile" element={ <RequireAuth><UserProfile /></RequireAuth> } />     
          

          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage onLogin={handleLogin}/>} />

          {/* Rutas error */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </AuthContextProvider>
      {/* <Layout /> */}
    </div>
  );
}

export default App;
