import React from "react";
import { Link } from "react-router-dom";
function ConnectWalllet() {
  return (
    <div>
      <div className="flex justify-center pb-14 pt-16">
        <img src="images/logo.png" alt="" className="h-16" />
      </div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold pb-6 ">Connect your wallet</h1>
      </div>
      <div className="grid justify-center gap-y-3 items-center">
        <button className="bg-black rounded-xl flex items-center gap-x-3 px-4 py-2 pr-24">
          <img src="images/wallet/install.png" alt="" className="h-5" />
          <h1 className="text-white font-semibold text-lg ">
            Install Metamask
          </h1>
        </button>
        <button className="bg-black rounded-xl flex items-center gap-x-3 px-4 py-2 pr-24">
          <img src="images/wallet/coinbase.png" alt="" className="h-5" />
          <h1 className="text-white font-semibold text-lg ">Coinbase Wallet</h1>
        </button>
        <Link to="/buycredits">
          <button className="bg-black rounded-xl flex items-center gap-x-3 px-4 py-2 pr-44">
            <img src="images/wallet/wallet.png" alt="" className="h-4" />
            <h1 className="text-white font-semibold text-lg ">WalletConnect</h1>
          </button>
        </Link>

        <Link
          to="/"
          className="underline hover:text-slate-950 text-[#494848] text-center"
        >
          I'II do it later
        </Link>
        <p className="text-center w-72 text-[#949292] text-sm">
          By connecting a wallet, you agree to WatchDogs’{" "}
          <Link className="text-[#4B61D8]">Terms of Service</Link> and consent
          to its <Link className="text-[#4B61D8]">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}

export default ConnectWalllet;
