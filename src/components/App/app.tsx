import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../../pages/main-page";
import ErrorPage from "../../pages/error-page";
import LoginPage from "../../pages/login-page";
import RegisterPage from "../../pages/register-page";
import ForgotPage from "../../pages/forgot-password-page";
import ResetPage from "../../pages/reset-password-page";
import ProfilePage from "../../pages/profile-page";
import IngredientPage from "../../pages/ingredient-page";
import HOCelement from "../../pages/hoc-log-reg";
import { ProtectedRouteElement } from "../../services/protected-route";

const LoginPageHOC = HOCelement(LoginPage);
const RegisterPageHOC = HOCelement(RegisterPage);
const ForgotPageHOC = HOCelement(ForgotPage);
const ResetPageHOC = HOCelement(ResetPage);
const ProfilePageHOC = HOCelement(ProfilePage);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<ProtectedRouteElement />}>
          <Route path="/profile" element={<ProfilePageHOC />} />
        </Route>
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path="/login" element={<LoginPageHOC />} />
        <Route path="/register" element={<RegisterPageHOC />} />
        <Route path="/forgot-password" element={<ForgotPageHOC />} />
        <Route path="/reset-password" element={<ResetPageHOC />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
