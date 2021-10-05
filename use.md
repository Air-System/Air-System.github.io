# air System2是一款嵌入式系统,它可以单独做一个网站,也可以嵌入任何一个div块
您可以在它的基础上进行改写,也可以将它作为一个操作系统使用
现在,让我们学习它的使用方法吧

# 文件
air system2的所有参数都存在 _ 变量中
_ 包括
+ system
储存API的目录
+ file
存储数据的目录
您可以利用_.system.file目录下的API对file进行操作
## parsing(URL)
解析标准文件URL格式
URL - 需要解析的URL
如json://res 将会解析为_.system.file.res
## new(URL,name,type)
新建一个文件
URL - 目标URL
name - 文件名字
type - 文件类型
## edit(URL,inner)
编辑目标的内容
URL - 目标URL
inner - 内容

# 时间
在air系统中,您可以使用_.system.date()获取一个准确的时间

# 启动
由于Air System是一个嵌入式系统,所以你要设定一个对象作为显示器
使用 _.system.boot(object) 进行设置
数据将会储存在json://screen/object/