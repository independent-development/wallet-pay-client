/* eslint-disable react/prop-types */
import React, { useEffect, useCallback } from "react";
import { Alert, Space, Button } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";


export default function TronLink(props) {

  const handleCallback = useCallback(async (event) => {
    if (event.data.message && event.data.message.action === "acceptWeb") {
      let res = await tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
      console.log(res);
    }
  }, []);

  useEffect(() => {
    (async () => {
      let res = await tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
      const balanceOf = await res.balanceOf("TVNWR1ZEJkyai4AiBpadU8vDvMu54sYKey").call({ from: "TVNWR1ZEJkyai4AiBpadU8vDvMu54sYKey" });
      console.log(tronWeb.toDecimal(balanceOf));
    })();
    // window.addEventListener("message", handleCallback);
    // return () => window.removeEventListener("message", handleCallback);
  }, []);

  return (
    <Space direction="vertical">
      <Space>
        <Button type="primary">连接钱包</Button>
        <Button type="primary">测试支付 20 usdt</Button>
      </Space>
      <Alert type="info" message={`当前账户名为:$`} />
    </Space>
  )
};


TronLink.propTypes = {


};
TronLink.defaultProps = {


};