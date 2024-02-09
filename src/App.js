import { useState } from "react";
import { start_process } from "./create_wallet";
import { MakeTransaction } from "./pages/make_transaction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { DashBoard_AddWallet } from "./pages/dashboard_add_wallet";
import {DashBoard_MyWallets} from "./pages/dashboard_my_wallet"
import { SignUp } from "./pages/sign_up";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element= {<Login />} />
        <Route path="/sign-up" element= {<SignUp />} />
        <Route path="/add-wallet" element= {<DashBoard_AddWallet />} />
        <Route path="/my-wallets" element= {<DashBoard_MyWallets />} />
        <Route path="/make-transaction" element= {<MakeTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
