import React from "react";
// import { getWindow } from "ssr-window";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "@/layouts";
import MetaMask from "@/pages/MetaMask";
import TronLink from "@/pages/TronLink";

import "./global.less";

export default () => {
  return (
    <Routes>
      <Route path="/" element={(<BasicLayout />)}>
        <Route path="/metamask" element={(<MetaMask />)} />
        <Route path="/tronlink" element={(<TronLink />)} />
      </Route>
    </Routes>
  )
};