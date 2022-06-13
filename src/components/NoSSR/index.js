/* eslint-disable react/prop-types */
import {useState,useEffect} from "react";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function NoSSR(props){
  const {children}=props;
  const [ready_status,set_ready_status]=useState(false);

  useEffect(()=>{
    set_ready_status(true);
  },[]);

  return ready_status?children:null;
};


NoSSR.propTypes={


};
NoSSR.defaultProps={


};