import {useState,useEffect} from "react";
import {useMediaQuery} from "react-responsive";

/**
 * @description 响应式规范参考自github
 * @link https://github.com/yocontra/react-responsive#easy-mode
 * 
 * @description 将访问 DOM/BOM 的方法放在 useEffect/useLayoutEffect 中（服务端不会执行）, 避免服务端执行时报错
 * @link https://www.codingsky.com/doc/2021/11/18/289.html
 * **/

export default function useResponsive(){
  
  const [responsive,set_Responsive]=useState({isDesktop:false,isTablet:false,isMobile:false});

  const isDesktop=useMediaQuery({minWidth:992});
  const isTablet=useMediaQuery({minWidth:768,maxWidth:991});
  const isMobile=useMediaQuery({maxWidth:767});

  useEffect(()=>{
    set_Responsive({isDesktop,isTablet,isMobile});
  },[isDesktop,isTablet,isMobile]);

  return responsive;
}