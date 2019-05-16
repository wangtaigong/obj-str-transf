# obj-str-transf
transform the object and string with symbol

用于对象和字符串之间的转换，其中字符串可以加入特定符号用以分隔对象转换后的键值对

### Usage| 用法

-----

```
var obstr = require('obj-str-transf')

var str = obstr.stringify('obj')

var obj = obstr.parse('str') 
```

#### Stringify Object | 字符化对象为字符串

```
var obstr = require('obj-str-transf')
var ob = { name: 'Allen', age: 23 }
var str = obstr.stringify(obj)
===> 'name=Allen; age=23'
```

#### Parsing Strings | 解析字符串为对象

```
var obstr = require('obj-str-transf')
var str = 'name=Allen; age=23'
var obj = obstr.parse(str)
===> { name: 'Allen', age: 23 }
```

