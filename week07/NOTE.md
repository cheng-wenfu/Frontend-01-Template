# 周四
<a name="eMtYZ"></a>
## 参考链接

- [https://www.runoob.com/w3cnote/flex-grammar.html](https://www.runoob.com/w3cnote/flex-grammar.html)
- [https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
- [https://www.npmjs.com/package/images](https://www.npmjs.com/package/images)
<a name="LSXod"></a>
## 元素主轴（main Axis）和交叉轴（cross Axis）
主轴表示元素的排布方向，正常元素排布根据先后顺序沿着主轴顺序排布

- 主轴为横轴<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1590592675371-2e7a4eb7-50ae-45b4-8707-f8a84315e2a3.png#align=left&display=inline&height=192&margin=%5Bobject%20Object%5D&name=image.png&originHeight=296&originWidth=473&size=9727&status=done&style=none&width=307)<br />flex-direction: row;
- 主轴为纵轴<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1590593572336-fd24e791-bc05-4188-bcb1-828af982bfe8.png#align=left&display=inline&height=174&margin=%5Bobject%20Object%5D&name=image.png&originHeight=348&originWidth=462&size=10463&status=done&style=none&width=231)<br />flex-direction: column;



<a name="i2TkY"></a>
## 第一步：收集元素进行
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1590594601406-ad7edb9f-1da3-41c9-9541-ed2b3fcce7c7.png#align=left&display=inline&height=185&margin=%5Bobject%20Object%5D&name=image.png&originHeight=369&originWidth=534&size=14379&status=done&style=none&width=267)<br />上述最后一个元素如果超出范围，需要另起一行，如果设置了 no-wrap 则强制分配第一行。<br />

<a name="5Y2UW"></a>
## 第二步：计算主轴
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1590595217828-7e4c8896-aaa3-4d49-9c06-b29306366ae8.png#align=left&display=inline&height=189&margin=%5Bobject%20Object%5D&name=image.png&originHeight=378&originWidth=467&size=14942&status=done&style=none&width=233.5)<br />计算主轴方向：

- 找出所有flex元素
- 把主轴方向的剩余尺寸按比例分配给这些元素
- 弱剩余空间为负数，所有flex元素为0，等比压缩剩余元素



<a name="1LI60"></a>
## 第三步：计算交叉轴
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1590595436393-b9be07a3-a65f-45bc-b45b-90751c77a1eb.png#align=left&display=inline&height=168&margin=%5Bobject%20Object%5D&name=image.png&originHeight=336&originWidth=479&size=16702&status=done&style=none&width=239.5)<br />计算交叉轴方向：

- 根据每一行最大元素尺寸计算行高
- 根据行高flex-align和item-align，确定元素具体位置。


<br />

<a name="Y1JKi"></a>
# 周六
## 参考链接

- [https://www.w3.org/TR/CSS21/grammar.html#q25.0](https://www.w3.org/TR/CSS21/grammar.html#q25.0)
- [https://www.w3.org/TR/css-syntax-3](https://www.w3.org/TR/css-syntax-3)
- [http://www.html-js.com/article/2402](http://www.html-js.com/article/2402)

<a name="fau1m"></a>
## 第一步：绘制单个元素

- 利用npm包images搭建一个绘制图形环境
- 绘制在viewPort上进行
- 与绘制相关的属性：background-color，background-image、border等。
<a name="ICLsF"></a>
## 第二步：绘制DOM树

- 递归调用子元素的方法完成DOM树的绘制
- 忽略一些不必要绘制的节点
- 忽略字体绘制
- 忽略图层compositing

