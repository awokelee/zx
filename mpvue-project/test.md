查询数据库的用户

```bash
[root@iZbp13kacqfe8vs6elfunrZ local]# netstat -an|grep 3306
tcp        0      0 0.0.0.0:3306            0.0.0.0:*               LISTEN
[root@iZbp13kacqfe8vs6elfunrZ local]# mysql -uroot -p
Enter password:
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 3
Server version: 5.5.60-MariaDB MariaDB Server

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]>#  SELECT DISTINCT CONCAT('User: ''',user,'''@''',host,''';') AS query FROM mysql.user;
+-----------------------------------------+
| query                                   |
+-----------------------------------------+
| User: 'root'@'%';                       |
| User: 'root'@'127.0.0.1';               |
| User: 'root'@'::1';                     |
| User: 'root'@'izbp13kacqfe8vs6elfunrz'; |
| User: 'root'@'localhost';               |
+-----------------------------------------+
5 rows in set (0.00 sec)


MariaDB [(none)]># GRANT ALL PRIVILEGES ON *.* TO 'root'@'0.0.0.0' IDENTIFIED BY '123456' WITH GRANT OPTION;
Query OK, 0 rows affected (0.00 sec)

MariaDB [(none)]># FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.00 sec)

MariaDB [(none)]># SELECT DISTINCT CONCAT('User: ''',user,'''@''',host,''';') AS query FROM mysql.user;
+-----------------------------------------+
| query                                   |
+-----------------------------------------+
| User: 'root'@'%';                       |
| User: 'root'@'0.0.0.0';                 |
| User: 'root'@'127.0.0.1';               |
| User: 'root'@'::1';                     |
| User: 'root'@'izbp13kacqfe8vs6elfunrz'; |
| User: 'root'@'localhost';               |
+-----------------------------------------+
6 rows in set (0.00 sec)

MariaDB [(none)]># grant all privileges on *.* to 'root' @'%' identified by 'yourpassword';
#FLUSH PRIVILEGES;
```


```bash
[root@iZbp13kacqfe8vs6elfunrZ weapp-mpvue]# pm2 stop example
[PM2] Applying action stopProcessId on app [example](ids: 0)
[PM2] [example](0) ✓
┌──────────┬────┬──────┬─────┬─────────┬─────────┬────────┬─────┬────────┬──────┬──────────┐
│ App name │ id │ mode │ pid │ status  │ restart │ uptime │ cpu │ mem    │ user │ watching │
├──────────┼────┼──────┼─────┼─────────┼─────────┼────────┼─────┼────────┼──────┼──────────┤
│ app      │ 1  │ fork │ 0   │ errored │ 30      │ 0      │ 0%  │ 0 B    │ root │ disabled │
│ example  │ 0  │ fork │ 0   │ stopped │ 0       │ 0      │ 0%  │ 0 B    │ root │ disabled │
└──────────┴────┴──────┴─────┴─────────┴─────────┴────────┴─────┴────────┴──────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
[root@iZbp13kacqfe8vs6elfunrZ weapp-mpvue]# pm2 log app
[TAILING] Tailing last 15 lines for [app] process (change the value with --lines option)
/root/.pm2/logs/app-out-1.log last 15 lines:
/root/.pm2/logs/app-error-1.log last 15 lines:
1|app      |     at Module._compile (module.js:570:32)
1|app      | /opt/app/weapp-mpvue/middlewares/response.js:6
1|app      | module.exports = async function (ctx, next) {
1|app      |                        ^^^^^^^^
1|app      | SyntaxError: Unexpected token function
1|app      |     at Object.exports.runInThisContext (vm.js:76:16)
1|app      |     at Module._compile (module.js:542:28)
1|app      |     at Object.Module._extensions..js (module.js:579:10)
1|app      |     at Module.load (module.js:487:32)
1|app      |     at tryModuleLoad (module.js:446:12)
1|app      |     at Function.Module._load (module.js:438:3)
1|app      |     at Module.require (module.js:497:17)
1|app      |     at require (internal/module.js:20:19)
1|app      |     at Object.<anonymous> (/opt/app/weapp-mpvue/app.js:4:18)
1|app      |     at Module._compile (module.js:570:32)

^C
[root@iZbp13kacqfe8vs6elfunrZ weapp-mpvue]# node -v
v8.11.4
[root@iZbp13kacqfe8vs6elfunrZ weapp-mpvue]# ps -ux | grep pm2
root      3742  0.1  1.4 917960 28184 ?        Ssl  22:05   0:00 PM2 v2.10.4: God Daemon (/root/.pm2)
root      4143  0.0  0.0 112660   968 pts/1    R+   22:10   0:00 grep --color=auto pm2
[root@iZbp13kacqfe8vs6elfunrZ weapp-mpvue]# kill -9 3742
[root@iZbp13kacqfe8vs6elfunrZ weapp-mpvue]# ps -ux | grep pm2
root      4145  0.0  0.0 112660   968 pts/1    R+   22:10   0:00 grep --color=auto pm2
[root@iZbp13kacqfe8vs6elfunrZ weapp-mpvue]# kill -9 4145
-bash: kill: (4145) - No such process
[root@iZbp13kacqfe8vs6elfunrZ weapp-mpvue]# ps -ux | grep pm2
root      4147  0.0  0.0 112660   968 pts/1    R+   22:10   0:00 grep --color=auto pm2
[root@iZbp13kacqfe8vs6elfunrZ weapp-mpvue]# pm2 start app.js
[PM2] Spawning PM2 daemon with pm2_home=/root/.pm2
[PM2] PM2 Successfully daemonized
[PM2] Starting /opt/app/weapp-mpvue/app.js in fork_mode (1 instance)
[PM2] Done.
┌──────────┬────┬──────┬──────┬────────┬─────────┬────────┬─────┬───────────┬──────┬──────────┐
│ App name │ id │ mode │ pid  │ status │ restart │ uptime │ cpu │ mem       │ user │ watching │
├──────────┼────┼──────┼──────┼────────┼─────────┼────────┼─────┼───────────┼──────┼──────────┤
│ app      │ 0  │ fork │ 4164 │ online │ 0       │ 0s     │ 3%  │ 13.6 MB   │ root │ disabled │
└──────────┴────┴──────┴──────┴────────┴─────────┴────────┴─────┴───────────┴──────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
[root@iZbp13kacqfe8vs6elfunrZ weapp-mpvue]# pm2 list
┌──────────┬────┬──────┬──────┬────────┬─────────┬────────┬─────┬───────────┬──────┬──────────┐
│ App name │ id │ mode │ pid  │ status │ restart │ uptime │ cpu │ mem       │ user │ watching │
├──────────┼────┼──────┼──────┼────────┼─────────┼────────┼─────┼───────────┼──────┼──────────┤
│ app      │ 0  │ fork │ 4164 │ online │ 0       │ 4s     │ 0%  │ 55.7 MB   │ root │ disabled │
└──────────┴────┴──────┴──────┴────────┴─────────┴────────┴─────┴───────────┴──────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
[root@iZbp13kacqfe8vs6elfunrZ weapp-mpvue]# pm2 list
```


```bash
nvm alias default 0.10.32
```
