/* eslint-disable */
const path=require("path");


module.exports={
  hash:true,
  output_path:path.resolve(__dirname,"./assets/"),
  title:"My Server App",
  client_template:path.resolve(__dirname,"./configs/client.template.js"),
  server_template:path.resolve(__dirname,"./configs/server.template.js"),
  define:{},
  proxy:require("./configs/proxy_middleware"),
  devServer:{
    port:8200,
    open:true,
    history_api_fallback:false,
    server_callback:path.resolve(__dirname,"./server/dev")
  }
};