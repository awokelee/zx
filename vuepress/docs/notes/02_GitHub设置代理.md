# GitHub 设置代理

- 配合 `shadowsocks` 设置

```shell
git config --global http.proxy 'socks5://127.0.0.1:1080'

git config --global https.proxy 'socks5://127.0.0.1:1080'
```

- 查看设置

`git config --global -l`

- 取消代理设置

```shell
git config --global --unset http.proxy

git config --global --unset https.proxy
```