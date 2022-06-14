/* eslint-disable react/prop-types */
import { Segmented, Space } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import React, { useCallback } from "react";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
import css from "./style.less";

export default function BasicLayout(props) {

  const navigate = useNavigate();

  const location = useLocation();

  const handleTrigger = useCallback((value) => {
    navigate(value);
  }, [navigate]);

  return (
    <div className={css.container} >
      <Space direction="vertical" className={css.content}>
        <Segmented
          block
          options={["metamask", "tronlink"]}
          value={location.pathname.replace("/", "")}
          onChange={handleTrigger}
        />
        <Outlet />
      </Space >
    </div>
  )
};


BasicLayout.propTypes = {


};
BasicLayout.defaultProps = {


};