# create-react-app 创建项目

react 脚手架工具很多, 官方推荐的是 `create-react-app`.

- 安装脚手架

```bash
npm install -g create-react-app
```

- 创建项目

假如我们要创建一个项目名称叫做 `my-app` 的 `react` 项目, 执行 `create-react-app my-app` 命令即可.

```bash {1,46,47}
> create-react-app my-app

Creating a new React app in D:\code\my-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.3.2
info No lockfile found.
[1/4] Resolving packages...
warning react-scripts > autoprefixer > browserslist@2.11.3: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > babel-preset-react-app > babel-preset-env > browserslist@2.11.3: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > css-loader > cssnano > autoprefixer > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > css-loader > cssnano > postcss-merge-rules > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > css-loader > cssnano > postcss-merge-rules > caniuse-api > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > jest > jest-cli > istanbul-api > istanbul-lib-hook@1.2.1: 1.2.0 should have been a major version bump
[2/4] Fetching packages...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "1.9.4" while you're on "1.3.2".
info To upgrade, run the following command:
$ curl -o- -L https://yarnpkg.com/install.sh | bash
success Saved 942 new dependencies.
......
Success! Created my-app at D:\code\my-app
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  yarn start

Happy hacking!
```

- 运行项目

执行 `cd my-app` 进入到项目目录, 然后执行 `yarn start` 启动项目.

```bash
> cd my-app
> yarn start
```