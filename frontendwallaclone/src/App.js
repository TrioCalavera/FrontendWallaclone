import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import CookieConsent from "react-cookie-consent";

import ScrollTop from "./components/elements/scrollTo/ScrollTop";
import ScrollToTop from "./components/elements/scrollTo/ScrollToTop";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import AdsContent from "./components/ads/AdsContent";
import AdDetails from "./components/ads/AdDetails";
import NotFound from "./components/layout/NotFound";
import AdNew from "./components/ads/AdNew";
import UserProfile from "./components/user/UserProfile";
import RequireAuth from "./components/requireAuth/RequireAuth";
import { AuthContextProvider } from "./components/context";

function App({ isInitiallyLogged }) {
  const { t } = useTranslation();
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
        <CookieConsent
          location="bottom"
          buttonText={t("cookies.button")}
          cookieName="wallaclone_consentimiento"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          {t("cookies.text")}{" "}
        </CookieConsent>
        <ScrollTop />
        <ScrollToTop />
        <Routes>
          {/* Rutas generales */}
          <Route path="/" element={<Navigate to="/adverts" />} />
          <Route path="/adverts" element={<AdsContent />} />
          <Route
            path="/adverts/:adsId"
            element={<AdDetails isLogged={isLogged} />}
          />

          <Route
            path="/new"
            element={
              <RequireAuth>
                <AdNew />
              </RequireAuth>
            }
          />
          <Route
            path="/user-profile"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          />

          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<RegisterPage onLogin={handleLogin} />}
          />

          {/* Rutas error */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
