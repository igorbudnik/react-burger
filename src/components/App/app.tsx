import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import AppHeader from "../AppHeader/app-header";
import { CLOSE_INGREDIENT } from "../../services/actions/details";
import { useAppDispatch } from "../..";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const LoginPageHOC = HOCelement(LoginPage);
const RegisterPageHOC = HOCelement(RegisterPage);
const ForgotPageHOC = HOCelement(ForgotPage);
const ResetPageHOC = HOCelement(ResetPage);
const ProfilePageHOC = HOCelement(ProfilePage);

export function App() {
  const location = useLocation();
  const background = location.state;

  console.log(background?.ingredient);

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route
          path="/"
          element={<MainPage ingredientSaved={background?.ingredient} />}
        />
        <Route element={<ProtectedRouteElement />}>
          <Route path="/profile" element={<ProfilePageHOC />} />
        </Route>
        {!background && (
          <Route path="/ingredients/:id" element={<IngredientPage />} />
        )}
        <Route
          path="/ingredients/:id"
          element={
            <DndProvider backend={HTML5Backend}>
              <MainPage ingredientSaved={background?.ingredient} />
            </DndProvider>
          }
        />
        <Route path="/login" element={<LoginPageHOC />} />
        <Route path="/register" element={<RegisterPageHOC />} />
        <Route path="/forgot-password" element={<ForgotPageHOC />} />
        <Route path="/reset-password" element={<ResetPageHOC />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default function ModalGalleryExample() {
  return (
    <Router>
      <App />
    </Router>
  );
}
