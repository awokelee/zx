# location 匹配优先级

匹配符 | 说明
----------|---------
`=` | 进行普通字符精确匹配, 也就是完全匹配, 优先级高
`^~` | 表示普通字符匹配, 使用前缀匹配, 以什么开头, 优先级高
`~` | 表示执行一个正则匹配(), 如果没有匹配到其他就是自己本身, 优先级低
`~*` | 不区分大小写, 表示执行一个正则匹配(), 如果没有匹配到其他就是自己本身, 优先级低

```bash
server {
    listen       80;
    server_name  testserver1 jeson.t.imoocc.io;

    root   /opt/app;
    # 优先级较高
    location ^~ /code {
        rewrite ^(.*)$ /code2/index.html break;
    }
    # 优先级低
    location ~ /code.* {
        rewrite ^(.*)$ /code3/index.html break;
    }
    # 优先级高
    location = /code1 {
        rewrite ^(.*)$ /code1/index.html break;
    }
}

```