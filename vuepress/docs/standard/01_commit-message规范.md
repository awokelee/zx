# Git 提交注释规范

## Conventional Commits

`https://conventionalcommits.org/#conventional-commits-100-beta2`

- 规定的格式如下:

```text
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

- `type` `用于表明我们这次提交的改动类型`
  - `build`：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
  - `ci`：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
  - `docs`：文档更新
  - `feat`：新增功能
  - `fix`：bug 修复
  - `perf`：性能优化
  - `refactor`：重构代码(既没有新增功能，也没有修复 bug)
  - `style`：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
  - `test`：新增测试用例或是更新现有测试
  - `revert`：回滚某个更早之前的提交
  - `chore`：不属于以上类型的其他类型

- `optional scope`

> 一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。根据项目实际情况填写即可，最好在项目中规定好模块列表，保持一致性

- `description`

> 一句话描述此次提交的主要内容，做到言简意赅

- 案例:

```text
git commit -m "refactor(ivy): move id to TView"
```

## 规范检查

- `commitlint`

- 在项目中启用 `commitlint`
  - 安装 commitlint 以及 conventional 规范：

```js
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

- 创建 `commitlint.config.js`, 写入

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

## commit 时执行 commitlint 检查输入的 message

- `husky`

> `husky` 是一个增强的 `git hook` 工具。可以在 `git hook` 的各个阶段执行我们在 `package.json` 中配置好的 `npm script`

- 安装 husky

```js
npm install --save-dev husky
```

- 接着在 `package.json` 中配置 `commitmsg` 脚本：

```js
{
  "scripts": {
    "commitmsg": "commitlint -E GIT_PARAMS"
  }
}
```

## 原文链接

- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html), by 阮一峰