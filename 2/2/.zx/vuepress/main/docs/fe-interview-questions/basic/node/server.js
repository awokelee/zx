const net = require('net')
const crypto = require('crypto')

// 1. 创建一个 tcp 服务器
let server = net.createServer(socket => {
  console.log('有人来连我了')

  // 3. 接受浏览器发过来的特殊头, 处理、返回处理结果
  socket.once('data', data => {
    // 第一次

    // 第一步: 把数据转换成 headers 的 json
    let str = data.toString()
    let aHeaders = str.split('\r\n')

    aHeaders.shift()
    aHeaders.pop()
    aHeaders.pop()

    let headers = {}

    aHeaders.forEach(str=>{
      let [name, value] = str.split(': ')

      headers[name] = value
    })

    console.log(headers)
    // 第二步: 校验
    if(headers['Connection'] != 'Upgrade' || headers['Upgrade'] != 'websocket'){
      console.log('接到了一个 ws 以外的协议, 扔了')
      socket.end()
    }else{
      // 第三步: 处理 websocket 专有头
      if(headers['Sec-WebSocket-Version'] != 13){
        console.log('版本不是想要的')
      }else{
        // 第四步: 处理 key
        // C -> S, 客户端发给服务端: "IRecy6Hbx+H25YloLAqpaA=="
        // S -> C, 服务端发给客户端: base64(sha1("IRecy6Hbx+H25YloLAqpaA==" + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"))
        // 258EAFA5-E914-47DA-95CA-C5AB0DC85B11 是作者随便搞的, 这个是神奇的 GUID, 都是用的他
        
        let hash = crypto.createHash('sha1')
        hash.update(headers['Sec-WebSocket-Key']+"258EAFA5-E914-47DA-95CA-C5AB0DC85B11")
        // 输出
        let bash64Key = hash.digest('base64')

        // bash64Key 发给客户端
        // 101 切换协议
        socket.write(
          `HTTP/1.1 101 Switching protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${bash64Key}\r\n\r\n`
        )

        console.log('握手完成')
      }

      // 后续
      socket.on('data', data => {
        // 帧结构 if(data[0]&0x0001){ alert('最后一个') }
        console.log(data)
      })
    }


    // 其他
  })
  socket.on('end', function() {
    console.log('连接已断开')
  })
})



server.listen(8080)