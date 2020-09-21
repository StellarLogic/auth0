import React from "react";
import Navbar from "./component/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
