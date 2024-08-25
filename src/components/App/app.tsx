import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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
import { useAppDispatch } from "../..";
import { getIngredients } from "../../services/actions/ingredients";
import FeedPage from "../../pages/feed-page";
import { useEffect } from "react";
import Modal from "../Modal/modal";
import FeedDetails from "../Feed/feed-details";
import IngredientDetails from "../IngredientDetails/ingredient-details";
import HistoryOrderPage from "../../pages/history-order-page";
import HistoryOrderListPage from "../../pages/orderslist-page";

const LoginPageHOC = HOCelement(LoginPage);
const RegisterPageHOC = HOCelement(RegisterPage);
const ForgotPageHOC = HOCelement(ForgotPage);
const ResetPageHOC = HOCelement(ResetPage);
const ProfilePageHOC = HOCelement(ProfilePage);

export function App() {
  const location = useLocation();
  const background = location.state?.background;

  const dispatch = useAppDispatch();
  console.log(location.state?.ingredient);

  dispatch(getIngredients());

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route
          path="/"
          element={<MainPage ingredientSaved={location.state?.ingredient} />}
        />
        <Route element={<ProtectedRouteElement />}>
          <Route path="/profile" element={<ProfilePageHOC />}>
            <Route path="/profile/orders" element={<HistoryOrderPage />} />
          </Route>
          {!background && (
            <Route
              path="/profile/orders/:number"
              element={<HistoryOrderListPage />}
            />
          )}
        </Route>

        {!background && (
          <Route path="/ingredients/:id" element={<IngredientPage />} />
        )}
        {!background && (
          <Route path="/feed/:number" element={<HistoryOrderListPage />} />
        )}

        <Route path="/login" element={<LoginPageHOC />} />
        <Route path="/register" element={<RegisterPageHOC />} />
        <Route path="/forgot-password" element={<ForgotPageHOC />} />
        <Route path="/reset-password" element={<ResetPageHOC />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/feed/:number"
            element={
              <Modal url={"/feed"}>
                <FeedDetails currentOrder={location.state?.ingredient} />
              </Modal>
            }
          />
          <Route element={<ProtectedRouteElement />}>
            <Route
              path="/profile/orders/:number"
              element={
                <Modal url={"/profile/orders"}>
                  <FeedDetails currentOrder={location.state?.ingredient} />
                </Modal>
              }
            />
          </Route>

          <Route
            path="/ingredients/:id"
            element={
              <Modal url={"/"}>
                <IngredientDetails
                  currentIngredient={location.state?.ingredient}
                />
              </Modal>
            }
          />
        </Routes>
      )}
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
