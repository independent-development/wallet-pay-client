/* eslint-disable import/no-extraneous-dependencies */
const fs=require("fs");
const path=require("path");
const express=require("express");
const {promisify}=require("util");
const prodRender=require("./prodRender");

const app=express();

(async ()=>{
  const html_template_path=path.resolve(__dirname,"../assets/index.html");
  const html_template=await promisify(fs.readFile)(html_template_path,"utf-8");
  app.use(prodRender(html_template));
  app.use(express.static(path.resolve(__dirname,"../assets/")));
  app.listen(8090);
})();

