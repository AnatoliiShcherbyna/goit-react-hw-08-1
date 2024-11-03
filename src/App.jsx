import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refresh } from "./redux/auth/operations";
import { selectisRefreshing } from "./redux/auth/selectors";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";


const App = () => {
const isRefreshing = useSelector(selectisRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh())
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
        <Layout>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RestrictedRoute component={<RegisterPage />} redirectTo='/contacts' />} />
        <Route path="login" element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
        <Route path="contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo='/login' />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
        </Layout>

  )
}

export default App




