import React from "react";

// Route
import { Route } from "react-router";

// Styles
import GlobalStyles from "./components/GlobalStyles";

// Components and Pages
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
