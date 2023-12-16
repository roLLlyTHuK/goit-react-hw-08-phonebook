import { Route, Routes } from 'react-router-dom';
import { Home, Login, Signup, Contacts } from '../pages';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { RestrictedRoute } from './Utilites/RestrictedRoute';
import { PrivateRoute } from './Utilites/PrivateRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Signup />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
