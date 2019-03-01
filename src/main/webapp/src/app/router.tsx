import * as React from "react";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";

const HomeRoute = Loadable({
    loader: () => import('./pages/Home'),
    loading: () => null,
});

const AdminRoute = Loadable({
    loader: () => import('./pages/Admin'),
    loading: () => null,
});

const LoginRoute = Loadable({
    loader: () => import('./pages/Login'),
    loading: () => null,
});

const AppRouter = () => {
  return (
      <div>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/login" component={LoginRoute} />
          <Route exact path="/admin" component={AdminRoute} />
      </div>
  )
};

export default AppRouter;
