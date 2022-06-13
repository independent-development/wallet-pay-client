const devRender=require("./devRender");

/**
 * @description 开发的时候服务端渲染的逻辑可以在这里调试
 * @param {Express} app app对象是一个express示例,可以在这个实例上执行挂载中间件等操作
 * @param {Function} server_render 这是编译后的服务端渲染方法,对应public中的导出函数
 * **/
const html_template=(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Document</title>
    <link rel="shortcut icon" href="/public/favicon.ico">
    <script defer src="/main.js"></script>
    <link href="/main.css" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
  </body>
  </html>
`);

module.exports=function server_callback(app){
  app.use(devRender(html_template));
};
