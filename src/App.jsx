import { useState } from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Mainbody from "./components/Main/Mainbody";
import Loginpage from "./components/Login/Login";
import Totalbalance from "./components/Dashboard/Totalbalance";
import Profit from "./components/Dashboard/Profit";
import Collection from "./components/Dashboard/Collection";
import { GrTransaction } from "react-icons/gr";
import Transaction from "./components/Dashboard/Transaction";
import Buycredit from "./components/BuyCredit/Buycredit";
import Loginpass from "./components/Login/Loginpass";
import Verifyemail from "./components/Login/Verifyemail";
import Verifyemailbtn from "./components/Login/Verifyemailbtn";
import NFTPL from "./components/Dashboard/NFTPL";
import Dash from "./components/Dashboard/Dash";
import Call from "./components/Login/Call";
import ConnectWalllet from "./components/BuyCredit/ConnectWalllet";
import WelcomPopup from "./components/Main/WelcomPopup";
import StartTracking from "./components/Main/StartTracking";
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
