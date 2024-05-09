import React from "react";
import {
  createBrowserRouter,
  createHashRouter,
  HashRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { AuthRouter, AuthRoutes } from "../module-auth/router";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { useCheckAuth } from "../hooks";
import { BodegaRoutes } from "../module-bodegas/router";

/* const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <JournalRouter />
      </PrivateRouter>
    ),
    children: JournalRoutes,
  },
  {
    path: "auth/*",
    element: (
      <PublicRouter>
        <AuthRouter />
      </PublicRouter>
    ),
    children: AuthRoutes,
  },
]); */

export const AppRouter = () => {
  const { status } = useCheckAuth();
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        
        
        
        
        <Route
          path="/banco/*"
          element={
            <PrivateRouter>
              <BodegaRoutes />
            </PrivateRouter>
          }
        />
        
        <Route path="/*" element={<Navigate to="/banco/inicio" />} />
      </Routes>
      {/* <RouterProvider router={routes} /> */}
    </>
  );
};
