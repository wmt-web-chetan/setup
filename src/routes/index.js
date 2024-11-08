import { lazy } from "react";

const PublicRoutes = [
    {
      path: "/login",
      component: lazy(() => import("../pages/SignIn/index.js")),
      exact: true,
    },
  
    // All the public routes
  ];
  
  const PrivateRoutes = [
   {
      path: "/",
      component: lazy(() => import("../pages/Home")),
      exact: true,
    
    },
    // All the private routes
   
  ];
  
  export { PublicRoutes, PrivateRoutes };
  