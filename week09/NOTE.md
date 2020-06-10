<a name="S2tDd"></a>
## 关键帧（@keyframes)
使用动画之前必须使用关键帧，一个关键帧表示动画过程和的一个状态。<br />[@keyframes](#) 关键帧语法规则：
```css
@keyframes animationname {
  keyframes-selector{css-styles;}
}
```

- animationname：表示当前动画的名称，作为引用时的唯一标识，不可省略。
- keyframes-selector：关键帧选择器，即指定当前关键帧应用到整个动画过程中的位置，可用百分比、from 和 to 表示，from 和 0% 表示动画开始的关键帧，to 和 100% 表示动画结束的关键帧。
- css-styles：定义动画执行到当前关键帧是的对应的动画状态，由 CSS 属性进行定义。



举例：淡入动画
```css
/*from to 用法*/
@keyframes 'appear1' {
  from {opacity: 0;}
  to {opacity: 1;}
}

/*百分比用法*/
@keyframes 'appear2' {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

/*组合用法*/
@keyframes 'appear_to_disappear' {
  from, to {opacity: 0;}
  30%, 70% {opacity: 1;}
}
```


<a name="rdmwC"></a>
## animation属性
**animation-name **
```css
animation-name: keyframename | none;/*默认值为none*/
```
keyframename 参数指需要绑定的关键帧 keyframe 的名称，值 none 表示没有动画，一般用于取消动画<br />
<br />**animation-duration **
```css
animation-duration: time; /*默认值为0*/
```
该属性定义执行动画过程所需要的时间，以毫秒(ms)或秒(s)为单位<br />
<br />**animation-timing-function **
```css
animation-timing-function: value;/*默认值为ease*/
```
animation-timing-funciton 属性值

| 属性值 | 描述 |
| --- | --- |
| linear | 动画执行过程速度相同 |
| ease | 默认值。动画以低速开始，然后加快，结束前变慢 |
| ease-in | 以低速开始 |
| ease-out | 以低速结束 |
| ease-in-out | 以低速开始和结束 |
| cubic-bezier(n,n,n,n) | n的范围从0-1 |

animation-timing-function 用来规定动画的速度曲线。<br />cubic-bezier 函数参考链接：[https://cubic-bezier.com/#.55,.55,.51,.36](https://cubic-bezier.com/#.55,.55,.51,.36)<br />
<br />**animation-delay**
```css
animation-delay: time;/*默认值为0*/
```
该属性定义执行动画效果的延迟时间，单位是 s 和 ms<br />
<br />**animation-iteration-count **
```css
animation-iteration-count: number | infinite; /*默认值为1*/
```
该属性表示定义动画的执行次数，如果是 infinite，则指定动画循环播放<br />
<br />**animation-direction**
```css
animation-direction:normal | alternate; /*默认值为normal*/
```
该属性定义动画的播放方向，normal 表示动画每次都是正常显示。如果是 alternate，则动画会在奇数次数正常播放，偶数次数逆向播放。<br />
<br />**animation**<br />animation 属性以上六个属性的复合，语法规则如下：
```css
animation: name duration timing-function delay iteration-count direction
```
<br />

<a name="qO0zl"></a>
## transition 属性
**transition-property**
```css
transition-property: none | all | property;
```
该属性用于指定过渡效果的 CSS 属性的名称。以下表格是 transition-property 属性值得描述

| 属性值 | 描述  |
| --- | --- |
| none | 没有属性获得过渡效果 |
| all | 所有属性获得过渡效果 |
| property | 指定 CSS 属性名称获得过渡效果，多个值用逗号分隔 |

**transition-duration**
```css
transition-duration:time;/*默认值为0*/
```
该属性用于定义过渡效果从开始到结束所需要的时间。<br />
<br />**transition-timing-function**<br />

```css
transition-timing-function: value;/*默认值为ease*/
```
transition-timing-funciton 属性值

| 属性值 | 描述 |
| --- | --- |
| linear | 过渡效果执行过程速度相同 |
| ease | 默认值。过渡效果以低速开始，然后加快，结束前变慢 |
| ease-in | 以低速开始 |
| ease-out | 以低速结束 |
| ease-in-out | 以低速开始和结束 |
| cubic-bezier(n,n,n,n) | n的范围从0-1，定义贝塞尔曲线的形状 |

animation-timing-function 用来规定动画的速度曲线。<br />贝塞尔曲线参考链接：[https://cubic-bezier.com/#.55,.55,.51,.36](https://cubic-bezier.com/#.55,.55,.51,.36)<br />
<br />**transition-delay**
```css
transition-delay: time;/*默认值为0*/
```
该属性用来定义过渡效果何时开始，值为负数时，过渡动作会从该时间点开始，之前的动作被截断；正数时，过渡效果延迟触发<br />
<br />**transition**<br />该属性为复合属性，设置以上四个过渡效果属性。<br />
```css
transition: property duration timing-function delay;
```

<a name="Khxcl"></a>
## 颜色
<a name="baIm0"></a>
### 人眼分辨光
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591319114050-b49a90ef-f4d5-4a5a-a19f-148e89e7721b.png#align=left&display=inline&height=238&margin=%5Bobject%20Object%5D&name=image.png&originHeight=475&originWidth=652&size=43184&status=done&style=none&width=326)<br />

<a name="pIl6S"></a>
### 颜色空间
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591319169732-594396d1-a8d3-4332-9572-2afc3b9c0506.png#align=left&display=inline&height=275&margin=%5Bobject%20Object%5D&name=image.png&originHeight=549&originWidth=1035&size=64038&status=done&style=none&width=517.5)<br />**RGB 颜色空间**<br />RGB（红绿蓝）是依据人眼识别的颜色定义出的空间，可表示大部分颜色。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591319375394-e9cecb14-09e1-4b94-8086-5a92c5afcc81.png#align=left&display=inline&height=311&margin=%5Bobject%20Object%5D&name=image.png&originHeight=622&originWidth=744&size=620906&status=done&style=none&width=372)<br />**CMY/CMYK 颜色空间**<br />CMY是工业印刷采用的颜色空间。它与RGB对应。简单的类比RGB来源于是物体发光，而CMY是依据反射光得到的。<br />颜料三颜色，红黄蓝<br />
<br />**HSL 和 HSV 颜色空间**<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591319802761-ae59ca44-9650-445b-bb07-e4395407ac61.png#align=left&display=inline&height=181&margin=%5Bobject%20Object%5D&name=image.png&originHeight=362&originWidth=319&size=57728&status=done&style=none&width=159.5)![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591319829998-3d125e52-442b-4785-92f3-8ea0e53b643c.png#align=left&display=inline&height=183&margin=%5Bobject%20Object%5D&name=image.png&originHeight=366&originWidth=339&size=70637&status=done&style=none&width=169.5)<br />H 是色调，S 为饱和度，L 和 V 都是表明亮度，明度的意思<br />这两种颜色空间是为了更好的数字化处理颜色而提出来的。<br />
<br />

<a name="TgLh9"></a>
## 形状
**CSS 属性**

- **border**
- **box-shadow**
- **boder-radius**

**<br />**data uri + SVG**<br />**![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591320671682-b6822c3d-0c32-4d23-9621-3e83066e2105.png#align=left&display=inline&height=169&margin=%5Bobject%20Object%5D&name=image.png&originHeight=337&originWidth=1161&size=247970&status=done&style=none&width=580.5)**<br />这是一个用来弄矢量图的方法，对于开发人员而言，可以画出任何想要的图形。<br />

<a name="8cezR"></a>
## XML 与 SGML
[https://www.cnblogs.com/huanqna/p/8178057.html](https://www.cnblogs.com/huanqna/p/8178057.html)
<a name="KAIW4"></a>
### HTML语法
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591448426856-e42ca44f-b202-4b83-9c8f-2e319feaea8e.png#align=left&display=inline&height=237&margin=%5Bobject%20Object%5D&name=image.png&originHeight=473&originWidth=870&size=203961&status=done&style=none&width=435)<br />&gt;<br />&lt;<br />&amp;<br />&quot;<br />

<a name="Hwd6h"></a>
### HTML标签语义化
根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。<br />例如用h1~h6来表示文字的标题，strong标签表示强调等

<a name="4RLSp"></a>
## DOM 节点
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1591800520777-e5f6fbd6-b96f-41d3-ad35-c0f83637990b.png#align=left&display=inline&height=347&margin=%5Bobject%20Object%5D&name=image.png&originHeight=379&originWidth=573&size=54629&status=done&style=none&width=525)<br />伪元素不在DOM树上，由 computeCSS 计算出来<br />**
<a name="Ob4um"></a>
### DOM 操作类 API
**参考链接：**[https://developer.mozilla.org/zh-CN/docs/Web/API/Node](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)<br />
<br />**导航类操作（属性）**

- parentNode<br />返回父节点
- childNodes<br />返回子节点的集合
- firstChild<br />返回第一个子节点的引用，没有则返回null
- lastChild<br />返回最后一个子节点的引用，没有则返回null
- nextSibling<br />只读属性，返回其父节点的 childNodes 列表中**紧跟在其后面的**节点，如果指定的节点为最后一个节点，则返回 null。
- previousSibling<br />返回当前节点的前一个兄弟节点,没有则返回 null 。



**修改操作（方法）**

- appendChild()<br />将一个节点附加到指定父节点的子节点列表的末尾处。如果将被插入的节点已经存在于当前文档的文档树中，那么 appendChild 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）<br />
- insertBefore()<br />在参考节点之前插入一个拥有指定父节点的子节点。如果给定的子节点是对文档中现有节点的引用，insertBefore会将其从当前位置移动到新位置（在将节点附加到其他节点之前，不需要从其父节点删除该节点）
- removeChild()<br />从DOM中删除一个子节点。返回删除的节点
- replaceChild()<br />用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点



**高级操作**

- compareDocumentPosition<br />比较当前节点与任意文档中的另一个节点的位置关系。
- contains<br />返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点
- isEqualNode<br />判断两个节点是否相等
- isSameNode<br />已作废，用 node1 =  node2 或 node1 == node2 来代替
- cloneNode<br />返回调用该方法的节点的一个副本

<br />