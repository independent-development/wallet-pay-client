/* eslint-disable react/prop-types */
import React from "react";
import { Alert, Space, Button } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function TronLink(props) {
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