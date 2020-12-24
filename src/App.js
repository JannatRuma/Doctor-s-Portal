import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AppointmentPage from './pages/AppointmentPage';
import AppointmentContextProvider from './context/AppointmentContext';
import Login from './components/Login/Login';
import UserContextProvider from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <UserContextProvider>
    <AppointmentContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/appointment">
            <AppointmentPage></AppointmentPage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
   </AppointmentContextProvider>
   </UserContextProvider>
  );
}

export default App;
