import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import Layout from "./components/layout/Layout";
import ScrollTop from "./components/elements/scrollTo/ScrollTop";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import AdsContent from "./components/ads/AdsContent";
import AdDetails from "./components/ads/AdDetails";
import NotFound from "./components/layout/NotFound";
import AdNew from "./components/ads/AdNew";
import UserProfile from "./components/user/UserProfile";

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLenguage] = useState('es');
 
  const onChangeLanguage = () => {
    i18n.changeLanguage({ language });
    if (language === 'es') {
      setLenguage('en');
    } else {
      setLenguage('es');
    }
  

  };
  return (
    <div className="App">
      <button onClick={onChangeLanguage}>
        {t('home.button.text')}
      </button>
      <ScrollTop />
      <Routes>
        {/* Rutas generales */}
        <Route path="/" element={<Navigate to="/adverts" />} />
        <Route path="/adverts" element={<AdsContent />} />
        <Route path="/adverts/:adsId" element={<AdDetails />} />

        {/* Hay que proteger RUTAS. NO OLVIDAR!! */}
        <Route path="/new" element={<AdNew />} />
        <Route path="/user-profile" element={<UserProfile />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rutas error */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      {/* <Layout /> */}
      
    </div>
  );
}

export default App;
