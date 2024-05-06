import { useState } from "react";
import "./App.css";
import Mainbody from "./components/Main/Mainbody";
import Loginpage from "./components/Login/Login";
import Buycredit from "./components/BuyCredit/Buycredit";
import Loginpass from "./components/Login/Loginpass";
import Dash from "./components/Dashboard/Dash";
import Call from "./components/Login/Call";
import ConnectWalllet from "./components/BuyCredit/ConnectWalllet";
import { Route, Routes } from "react-router-dom";
import OrderSummary from "./components/BuyCredit/OrderSummary";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Mainbody />}></Route>
        <Route path="login" element={<Loginpage />}></Route>
        <Route path="signin" element={<Loginpass />}></Route>
        <Route path="signup" element={<Call />}></Route>
        <Route path="dashboard" element={<Dash />}></Route>
        <Route path="connectwallet" element={<ConnectWalllet />}></Route>
        <Route path="buycredits" element={<Buycredit />}></Route>
        <Route path="order" element={<OrderSummary />}></Route>
      </Routes>
    </main>
  );
}

export default App;
