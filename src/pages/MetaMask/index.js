/* eslint-disable react/prop-types */
import { Alert, Space, Button } from "antd";
import convert from "ethereum-unit-converter";
import React, { useState, useEffect, useCallback } from "react";
import { LinkOutlined, PayCircleOutlined } from "@ant-design/icons";
// import {Outlet} from "react-router-dom";
// import {Outlet,Navigate,useLocation} from "react-router-dom";

// import css from "./style.less";

// import classnames from "classnames";
// import propTypes from "prop-types";

// if (!process.env.isServer) {
//   console.log(Number(convert(20, "ether", "wei")).toString(16));
// }

export default function MetaMask() {

  const [wallet_status, set_wallet_status] = useState();

  const [accounts, set_accounts] = useState([]);

  useEffect(() => {
    ethereum.on("connect", async () => {
      set_wallet_status("已连接");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      set_accounts(accounts);
    });
    ethereum.on("accountsChanged", async () => {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      set_accounts(accounts);
    });
    ethereum.on("disconnect", () => {
      set_wallet_status("未连接");
    });
  }, []);

  const handleClick = useCallback(async () => {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    set_accounts(accounts);
  }, []);

  const handleClickPay = useCallback(async () => {
    if (accounts[0].toLowerCase() === "0x66dfCc9CD9a710Fa7711bB90599b529054aEc0dD".toLowerCase()) {
      return alert("请勿给自己转账");
    } else {
      const transaction_hash = await ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: accounts[0],
          to: "0x66dfCc9CD9a710Fa7711bB90599b529054aEc0dD",
          value: Number(convert(20, "ether", "wei")).toString(16)
        }]
      });
      console.log("交易hash===>", transaction_hash);
    }
  }, [accounts]);

  if (wallet_status === "未连接") {
    return null;
  }

  return (
    <Space direction="vertical">
      <Space>
        <Button type="primary" icon={(<LinkOutlined />)} onClick={handleClick}>连接到MateMask</Button>
        <Button type="primary" icon={(<PayCircleOutlined />)} onClick={handleClickPay}>测试支付 20 ether</Button>
      </Space>
      <Alert type="success" message={accounts.join("\n")} />
    </Space>
  )
}


MetaMask.propTypes = {


};
MetaMask.defaultProps = {


};