# `proxy_set_header` 头信息

```md
Syntax: proxy_set_header field value;
Default: proxy_set_header Host $proxy_host;
         proxy_set_header Connection close;
Context: http, server, location
```

扩展: `proxy_hide_header`、`proxy_set_body`