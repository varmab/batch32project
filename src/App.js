import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import HomePage from './home/containers/HomePage'
import AboutPage from './about/containers/AboutPage';
import ShopPage from './shop/containers/ShopPage';
import CartPage from './shop/containers/CartPage';
import CheckoutPage from './shop/containers/CheckoutPage';
import ContactPage from './contact/containers/ContactPage';
import LoginPage from './account/containers/LoginPage';
import RegisterPage from './account/containers/RegisterPage';
import DashboardPage from './dashboard/containers/DashboardPage';
import ItemDetailPage from './shop/containers/ItemDetailPage';
import NotFoundPage from './shared/containers/NotFoundPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/items/:id" component={ItemDetailPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
