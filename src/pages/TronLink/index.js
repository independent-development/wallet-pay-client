/* eslint-disable react/prop-types */
import { Alert, Space, Button, message } from "antd";
import React, { useState, useEffect, useCallback } from "react";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";


export default function TronLink(props) {

  const [access_status, set_access_status] = useState("未授权");

  const handleConnectWallte = useCallback(async () => {
    const { code } = await tronLink.request({ method: "tron_requestAccounts" });
    if (code === 200) {
      set_access_status("已授权");
    } else {
      set_access_status("未授权");
    };
  }, []);

  useEffect(() => {
    window.addEventListener("tronLink#initialized", handleConnectWallte, { once: true });
    return () => window.removeEventListener("tronLink#initialized", handleConnectWallte);
  }, []);

  const handleQueryUsdt = useCallback(async () => {
    const log_complate = message.loading("正在查询中... ...");
    const USDT_CONTRACT = await tronWeb.contract().at("TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj");
    const balanceOf = await USDT_CONTRACT.balanceOf("TVNWR1ZEJkyai4AiBpadU8vDvMu54sYKey").call();
    console.log(tronWeb.toDecimal(balanceOf));
    log_complate();
  }, []);

  const handleTestPayTrx = useCallback(async () => {
    const txn = await tronWeb.trx.sendTransaction("TSnfU72F6EmLbobtjNTUxsjjApWpTS9LdF", 100000000);
    console.log("txn==>", txn);
  }, []);

  const handleTestPayUsdt = useCallback(async () => {
    const USDT_CONTRACT = await tronWeb.contract().at("TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj");
    const tx_result = await USDT_CONTRACT.transfer("TSnfU72F6EmLbobtjNTUxsjjApWpTS9LdF", 20000000).send();
    console.log(tx_result);
  }, []);

  if (access_status === "未授权") {
    return (
      <Button type="primary" onClick={handleConnectWallte}>连接钱包</Button>
    )
  }

  if (access_status === "已授权") {
    return (
      <Space direction="vertical">
        <Space>
          <Button type="primary" onClick={handleQueryUsdt}>查询USDT余额</Button>
          <Button type="primary" onClick={handleTestPayTrx}>测试支付 100 TRX</Button>
          <Button type="primary" onClick={handleTestPayUsdt}>测试支付 20 USDT</Button>
        </Space>
        <Alert type="info" message={`当前账户名为:$`} />
      </Space>
    )
  }

  return null;

};


TronLink.propTypes = {


};
TronLink.defaultProps = {


};