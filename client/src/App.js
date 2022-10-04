import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./component/Signin";
import Landing from "./component/Landing"
import Main from "./component/Main"

import Signup from "./component/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="signup" element={<Signup />} />
        <Route path="main" element={<Main/>} />
        <Route path="/" element={<Landing />} />
        <Route path="signin" element={<Signin />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;