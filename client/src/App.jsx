import React, { useContext } from "react";
import { WrapperApp } from "./App.styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <Router>
      <WrapperApp>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <LoginPage />}
          />
        </Routes>
      </WrapperApp>
    </Router>
  );
};

export default App;
