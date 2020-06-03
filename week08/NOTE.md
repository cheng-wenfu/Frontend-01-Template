# 每周总结可以写在这里

## 选择器
### 简单选择器

- 通配符选择器
   - *
- 标签选择器
   - div
   - p
- 类选择器
   - .cls
- ID选择器
   - #id
- 属性选择器
   - [attr=value]
   - [attr~=value] 属性中包含“value”单词的属性值
   - [attr|=value] 属性值为“value”或是以“value-”为前缀
   - [attr^=value] 以“value”字符串开头的属性值
   - [attr$=value] 以“value”字符串结尾的属性值
   - [attr*=value] 包含“value”字符串的属性值
- 伪类选择器    
   - :hover
   - :focus
- 伪元素选择器（单冒号双冒号都可以）
   - ::before
   - ::after
   - ::firstLine
   - ::firstletter



### 复合选择器

- <简单选择器><简单选择器><简单选择器>
   - div.cls#id
- * 或者 div 必须写在最前面？



### 复杂选择器

- <复合选择器><sp><复合选择器>（后代选择器）
   - div p span 
- <复合选择器>">"<复合选择器>
选择某个元素的第一级子元素，子元素不唯一
   - h1>strong

```html
<style>
  	h1>strong {
      color:red;
  }
</style>
<h1>重学<strong>CSS</strong>————<strong>前端重点</strong></h1>
<h1>这<em><strong>世界</strong></em>很酷</h1>
```
第6行代码strong元素为h1元素的子元素，第7行代码strong元素为h1元素的孙元           素，样式只对第6行有效

- <复合选择器>"~"<复合选择器>（普通兄弟选择器）
~两边的元素为同一父元素，右选择器匹配的元素不必紧跟左选择器匹配的元素，右选择器匹配的选择器**不唯一**
      - p~h3
```html
<style>
  p~h3 {
  	color:red;
  }
</style>
<div>
  <p>选择器</p>
  <h1>选择器列表</h1>
  <h3>ID选择器</h3>
  <h3>类选择器</h3>
  <h3>标签选择器</h3>
</div>
```
9-11行代码按选择所有h3元素为p元素的兄弟元素，9-10行按样式显示。

- <复合选择器>"+"<复合选择器> （临近兄弟选择器）
~两边的元素为同一父元素，右选择器匹配的元素**必须紧跟**左选择器匹配的元素，右选择器匹配的选择器**唯一**
   - p+h3
```html
<style>
  p~h3 {
  	color:red;
  }
</style>
<div>
  <p>选择器</p>
  <h3>ID选择器</h3>
  <h3>类选择器</h3>
  <h3>标签选择器</h3>
</div>
```
只有第8-10行的h3元素为p元素的兄弟元素，但只有第8行的h3元素才紧跟p元素

- <复合选择器>"||"<复合选择器>
   - 

### 分组选择器

- p, a, .cls
## 选择器优先级
选择器的优先级有四个部分相加，可以认为是个十百千——四位数的四个位数：

1. 千位：声明在 style 的属性（内联样式）则该位的一分，由于内联样式没有选择器，所以得分总是1000分（分也可以称为权重）；
1. 百位：对应的是ID选择器，选择器中有两个ID选择器，则该位得一分；
1. 十位：对应类选择器、属性选择器和伪类选择器；
1. 个位：对应标签选择器和伪元素选择器；



**举例：**
```html
div#a.b.c[id=x]
```
上述选择器中，有两个一个ID选择器，两个类选择器，一个属性选择器和一个标签选择器，没有内联样式，所以优先级四位用数组表示为 **[0, 1, 3, 1]**，计算后得分为 **131 **分。


**注：***，+，>，~，<sp>，:not 不影响优先级
!important 被赋予最大的优先级（∞）
计算优先级时不可以进位，即再多的类选择器，也不如一个ID选择器的优先级高。
**
**参考链接**

- [https://specifishity.com/](https://specifishity.com/)
- [https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
## 伪类
**链接/行为**

- :any-link
- :link
- :visited
- :hover

- :active
- :focus
- :target



**树结构**

- :empty
- :nth-child()
- :nth-last-child()
- :first-child
- :last-child
- :only-child

**
**逻辑型**

- :not
- :where



注：hover 只会被鼠标触发
active/focus 能被鼠标和键盘触发


## 伪元素

- ::before
- ::after
- ::firstLine
- ::firstletter

![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1590672683581-ff4a78f2-1970-49ca-87e8-c41d31c8c10d.png#align=left&display=inline&height=161&margin=%5Bobject%20Object%5D&name=image.png&originHeight=321&originWidth=772&size=118710&status=done&style=none&width=386)

## 标签(Tag)、元素(Element)、盒(Box）
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1590836967157-1d1d40e6-031b-41d9-95f1-b277c6a4d213.png#align=left&display=inline&height=303&margin=%5Bobject%20Object%5D&name=image.png&originHeight=605&originWidth=857&size=233126&status=done&style=none&width=428.5)


## 盒模型
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1590837282527-3854f995-cdac-4cdb-8199-283f9a131be4.png#align=left&display=inline&height=300&margin=%5Bobject%20Object%5D&name=image.png&originHeight=599&originWidth=1100&size=110986&status=done&style=none&width=550)**
**W3C标准盒模型(conten-box)**
width = 内容的宽度
height = 内容的高度


**IE盒模型(border-box)**
width = border + padding  + 内容的宽度
height = border + padding + 内容的高度




## 正常流
正常流指盒子从左往右从上往下排版
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591100944942-526b8396-64fc-4cac-b98c-e43dbf7bd4a0.png#align=left&display=inline&height=195&margin=%5Bobject%20Object%5D&name=image.png&originHeight=389&originWidth=892&size=47382&status=done&style=none&width=446)
在行轴方向，是从左往右排布的，排布的东西一般有两种，一种是字符abc等，一种的inline-box，inline-box为行内元素或者用display属性设置inline-flex表现。行与行之间以行盒的形式从上到下排布，行盒是一个抽象的概念，不对应任何HTML元素。文字排满一行、line-box组成一行排版，都会产生行盒。**（IFC）**


在纵轴方向，是从上往下排布的，以行盒、block-box（块盒）方式排布。**（BFC）**


### 正常流的行模型（IFC）
**基线**
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1590839012864-7be81094-c736-4b75-afb0-c0a713b1ea8b.png#align=left&display=inline&height=127&margin=%5Bobject%20Object%5D&name=image.png&originHeight=254&originWidth=633&size=22238&status=done&style=none&width=316.5)**
文字之间有个对齐的关系，inline-box也与文字有个对齐的关系。文字的对齐以**基线（baseline)**为准，上图红线就是基线，与英文练习本中四线格的第三条线同义。
文字有上缘和下缘，对元素设置Vertical-align属性，可以与文字对齐。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1590840580785-c8fd00cb-ee1a-4714-b798-b931664c592d.png#align=left&display=inline&height=126&margin=%5Bobject%20Object%5D&name=image.png&originHeight=252&originWidth=948&size=36234&status=done&style=none&width=474)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591105818348-35f6a6cc-fb47-418d-8a45-b970019e68e5.png#align=left&display=inline&height=361&margin=%5Bobject%20Object%5D&name=image.png&originHeight=721&originWidth=1394&size=40194&status=done&style=none&width=697)


### float和clear
float 表示元素浮动，设置float属性，会使元素脱离正常流排版。
float 属性值有四个：left(向左浮动)，right(向右浮动)，none(不浮动，默认值)，inherit(继承父元素float属性值)
clear 表示清除浮动，属性值同float相同，表示不允许有左右侧有浮动元素


**例子1：**
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591107164593-fe0b22cb-8a85-408e-98ab-f90f00e2ca13.png#align=left&display=inline&height=260&margin=%5Bobject%20Object%5D&name=image.png&originHeight=866&originWidth=819&size=84459&status=done&style=none&width=246)![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591107192849-3ecef458-314b-4601-a207-5a4ebbf764a2.png#align=left&display=inline&height=208&margin=%5Bobject%20Object%5D&name=image.png&originHeight=580&originWidth=1410&size=75557&status=done&style=none&width=505)
上述所有橙色框设置float属性为right，根据显示范围宽度不同，呈现不同的显示的效果，如果要使右边没有浮动元素，可以设置clear属性为right，如下图，我在橙色框3里添加了clear:right样式，呈现如下图效果。设置了clear:right属性，如果右边有浮动元素，就会换行进行排版。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591107373842-54f5413d-f520-4041-ba8d-16ebd71b2c2f.png#align=left&display=inline&height=261&margin=%5Bobject%20Object%5D&name=image.png&originHeight=521&originWidth=1408&size=70992&status=done&style=none&width=704)
**例子2：**
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591107736483-81163742-6d83-4413-9f23-5be0d7ecd69f.png#align=left&display=inline&height=245&margin=%5Bobject%20Object%5D&name=image.png&originHeight=489&originWidth=420&size=7344&status=done&style=none&width=210)
代替正常流，浮动元素也可以进行换行。


**例子3：**
**![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591108183127-27128561-fff9-4abe-b4b7-911dbf36b1b8.png#align=left&display=inline&height=96&margin=%5Bobject%20Object%5D&name=image.png&originHeight=192&originWidth=826&size=6096&status=done&style=none&width=413)**
上述所有元素框都设置了display:inline-block属性，中间的空格是回车符。


### margin折叠
外边距折叠只会发生在BFC里，意思是在上下方向才会发生折叠

**参考链接：**[https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)


### overflow:visibel 与 BFC
如果某个元素设置display:inline-block或者overflow:visible，那个该元素与其他元素就不会发生折叠现象
### Flex
inline-block:可以当两部分看，对外面的它的兄弟节点来说，他是一个inline元素，对它包含的元素来说，他是一个可以包含block的container，建立BFC。
**参考链接：**[https://www.w3.org/TR/css-flexbox-1/](https://www.w3.org/TR/css-flexbox-1/)
