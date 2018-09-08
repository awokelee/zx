# 从 jQuery 到框架

### jQuery 实现 TODO-LIST

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>to-do-list by jquery</title>
</head>

<body>
  <div>
    <input type="text" name="" id="txt-title">
    <button id="btn-submit">submit</button>
  </div>
  <div>
    <ul id="ul-list"></ul>
  </div>

  <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    var $txtTitle = $('#txt-title')
    var $btnSubmit = $('#btn-submit')
    var $ulList = $('#ul-list')
    $btnSubmit.click(function () {
      var title = $txtTitle.val()
      if (!title) {
        return
      }
      var $li = $('<li>' + title + '</li>')
      $ulList.append($li)
      $txtTitle.val('')
    })
  </script>
</body>

</html>
```

### Vue 实现 TODO-LIST

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>to-do-list by vue</title>
  <script src="https://unpkg.com/vue"></script>
</head>

<body>
  <div id="app">
    <div>
      <input v-model="title">
      <button v-on:click="add">submit</button>
    </div>
    <div>
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </div>
  </div>

  <script type="text/javascript">
    // data 独立
    var data = {
      title: '',
      list: []
    }
    // 初始化 Vue 实例
    var vm = new Vue({
      el: '#app',
      data: data,
      methods: {
        add: function () {
          this.list.push(this.title)
          this.title = ''
        }
      }
    })
  </script>
</body>

</html>
```

### jQuery 和 Vue 区别

- 数据和视图的分离

- 以数据驱动视图, 只关系数据变化, `DOM` 操作被封装