import { Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { PublicRoutes, PrivateRoutes } from "./routes";
import NonAuth from "./components/NonAuthLayout";
import AuthLayout from "./components/AuthLayout";
function App() {
  const isLoggedIn = true;

  return (
    <Routes>
      {PublicRoutes.map(({ path, exact, component: Component }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          element={
            <Suspense fallback="loading">
              <NonAuth>
                <Component />
              </NonAuth>
            </Suspense>
          }
        />
      ))}
      <Route path="/" exact element={<AuthLayout />}>
        {PrivateRoutes.map(({ path, exact, component: Component }) => {
          return isLoggedIn ? (
            <Route
              key={path}
              path={path}
              exact={exact}
              element={<Component />}
            />
          ) : (
            <Route
              key={path}
              path={path}
              exact={exact}
              element={<Navigate to="/login" />}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
