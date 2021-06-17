import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { projectAuth } from "./firebase/config";
import Auth from "./Authentication/Auth";

import Moneywind from "./components/Moneywind";

function App() {
  const [user] = useAuthState(projectAuth);
  return <div>{!user ? <Auth /> : <Moneywind />}</div>;
}

export default App;
