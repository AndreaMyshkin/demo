import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RandomCatContainer from "./pages/RandomCatContainer";
import CategoriesContainer from "./pages/CategoriesContainer";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={RandomCatContainer} />
          <Route exact path="/categories" component={CategoriesContainer} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
