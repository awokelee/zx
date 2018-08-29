# Nginx 漏洞和新特性

- 查看版本更新描述

[CHANGES-1.12](http://nginx.org/en/CHANGES-1.12)

```bash
Changes with nginx 1.12.1                                        11 Jul 2017

    *) Security: a specially crafted request might result in an integer
       overflow and incorrect processing of ranges in the range filter,
       potentially resulting in sensitive information leak (CVE-2017-7529).
```

- `CVE-2017-7529`

`1.12.1` 之前都存在