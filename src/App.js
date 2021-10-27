import React from "react";
import Router from "./Router";
import Provider from "./Context/provider";
import './style.css';

function App() {
  return (
  <div>
    <Provider>
      <Router />
    </Provider>
  </div>
  );
}

export default App;
