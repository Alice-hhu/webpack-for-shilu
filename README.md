施璐自学
### 创建 package.json 文件，记录当前项目信息（项目名称、项目版本、主文件、依赖包及其版本等）
npm init
### npm init -y 创建默认json文件，无需一项一项设置

### 本地安装webpack
npm install --save-dev webpack

### 安装依赖包（以 lodash 为例）
npm install --save lodash
### 在入口文件中导入依赖包（没有全局作用域污染）import 和 export是ES5开始支持
import _ from 'lodash';

### 打包方式 1：将src/index.js作为入口，编译输出打包文件bundle.js到dist
npx webpack src/index.js --output dist/bundle.js

### 打包方式 2：创建 webpack.config.js 配置文件，配置打包文件名、地址信息等
npx webpack --config webpack.config.js

### 打包方式 3：在 package.json 文件中添加 npm 脚本 执行npm run build 即可打包
"scripts": {
    "build": "webpack"
  },
npm run build

webpack-demo
### 打包配置文件
    |- webpack.config.js
### 项目信息（依赖包等）
    |- package.json
### 打包目标地址
    |- /dist
        |- bundle.js
        |- index.html
### 源代码地址
    |- /src
        |- index.js



### 上传代码到 GitHub 时忽略 node_modules 文件，创建 .gitignore 文件，新增忽略项 node_modules/
touch .gitignore
