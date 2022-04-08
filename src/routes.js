import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './pages/SignUp/index';
import SignIn from './pages/SignIn/index';




const Routs = () => (
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
);

export default Routs;
