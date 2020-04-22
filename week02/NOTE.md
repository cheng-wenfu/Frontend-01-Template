# 周四：编程语言通识

## 语言按照语法分类
### 形式语言（[乔姆斯基谱系](https://zh.wikipedia.org/zh-cn/%E4%B9%94%E5%A7%86%E6%96%AF%E5%9F%BA%E8%B0%B1%E7%B3%BB)）

- 0型 无限制文法（短语结构文法）包括所有文法

- 1型 上下文相关文法
语义跟上下文语义相关
- 2型 上下文无关文法
大部分程序设计语言主体上属于上下文无关文法

- 3型 正则文法
简单概况为能用正则表达式解析的文法

_非形式语言：中文、英文_

## 产生式（BNF）
### 什么是产生式
采用动态的、按规则变化的、不断增长的语法模板来应对任意组合、拓展、不确定符号数量的问题。
其他产生式有：**EBNF、ABNF**
### 规则
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587039383561-6b464f21-cc0c-4de9-a23f-43bc9fee49c2.png#align=left&display=inline&height=274&margin=%5Bobject%20Object%5D&name=image.png&originHeight=548&originWidth=981&size=322832&status=done&style=none&width=491)
用尖括号括起来的名称来表示语法结构名
语法机构分成基础结构和需要用其他语法结构定义的复合结构

- 基础结构称为终结符
- 复合结构称为非终结符

引号和中间的字符表示终结符
可以有括号
*表示重复多次
|表示或
+表示至少一次
### 练习1: 创建一种简单语言
```
//只用"a"、"b"两种字符组成的语言
/****************************/
//终结符 a b
"a"
"b"

//非终结符，由单个终结符 a 或 单个终结符 b 组成
<Program> ::= "a"+ | "b"+ 
//递归
<Program> ::= <Program> ("a"* | "b"*)
<Program> ::= <Program> "a"+ | <Program> "b"+

```
### 练习2：四则运算
```
//上下文无关文法
//数字（终结符）
<Number> ::= 0 | 1 | 2 | ... | 9

//运算符（终结符）
"+" "-" "*" "/"

//非零十进制
<DecimalNumberNoZero> ::= (( 1 | 2 | 3 | ...| 9) <Number>*)

//十进制
<DecimalNumber> ::= ((0 | <DecimalNumberNoZero> ))

<PrimaryExpression> = <DeciMalNumber> | 
		"(" <LogicalExpression> ")"

//乘法（单独一个数可以看成乘法，如 10 = 10 * 1）
<MulExpression> ::= <PrimaryExpression> | 
		<MulExpression> "*" <PrimaryExpression> |
    <MulExpression> "/" <PrimaryExpression>
										
//加法
<AddExpression> ::= <MulExpression> | 
		<AddExpression> "+" <MulExpression> |
  	<AddExpression> "-" <MulExpression> 
  
//逻辑运算 
<LogicalExpression> ::= <AddExpression> |
		<LogicalExpression> "||" <AddExpression> |
    <LogicalExpression> "&&" <AddExpression>
 
```
### 课堂练习1
编写带括号的四则运算产生式，上下文无关文法，建立语法树 -> 剪枝 -> 抽象语法树
```
//终结符
0 1 2 3 4 5 6 7 8 9
( ) + - * / %

//非终结符
<DecimalNumber> ::= /0|[1-9][0-9]*/

<Expressions> ::= /<DecimalNumber>|<AddExpression>|<MulExpression>/

<PrimaryExpression> = /<DecimalNumber>|\(<Expressions>\)/

<MulExpression> = /<PrimaryExpression>|
    <MulExpression>\*<PrimaryExpression>|
    <MulExpression>\/<PrimaryExpression>|
    <MulExpression>%<PrimaryExpression>/

<AddExpression> = /<MulExpression>|
    <AddExpression>\+<MulExpression>|
    <AddExpression>-<MulExpression>/


```
### 通过产生式理解乔姆斯基谱系

- 0型 无限制文法
? ::= ?
- 1型 上下文相关文法
?<A>? ::= ?<B>?
举例：**<A><B><C> = <A>"b"<C>, <A><B><D> = <A>"B"<D>**，上下文不一样，所代表的含义就不一样
- 2型 上下文无关文法
<A> ::= ?
- 3型 正则文法（只允许左递归）
<A> ::= <A>?
~~<A> ::= ?<A>~~

~~
### 课堂练习2
尽可能寻找知道的计算机语言，根据乔姆斯基姆系分类
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587385009197-41b073a5-c44d-4432-9cc3-79ecaeb7cace.png#align=left&display=inline&height=266&margin=%5Bobject%20Object%5D&name=image.png&originHeight=532&originWidth=990&size=80552&status=done&style=none&width=495)


# 图灵完备性
在可计算理论中，如果一系列的数据操作规则（如指令集、编程语言，细胞自动机）可以用来模拟单带图灵机，那么它是具备图灵完备性的。<br/>
图灵完备性通常指“具有无限存储能力的通用物理机器或编程语言”<br/>
### 命令式——图灵机
- goto
- if 和 while
### 声明式——lambda

- 递归
- 分治



# 动态与静态
### 动态：
动态语言是在运行时确定数据类型的语言。变量使用之前不需要类型声明，通常变量的类型是被赋值的那个值的类型。 如C++，JAVA，C#等

- 在用户的设备/在线服务器上
- 产品实际运行时
- RunTime
### 静态：
静态语言是在编译时变量的数据类型即可确定的语言，多数静态类型语言要求在使用变量之前必须声明数据类型。 如PHP，JavaScript，Python等

- 在程序员设备上
- 产品开发阶段
- CompileTime


# 类型系统
### 静态类型系统与动态类型系统
### 强类型与弱类型

- 强类型：无隐式转换
- 弱类型：有隐式转换
### 复合类型

- 结构体
- 函数签名
- 对象
### 子类型

- 逆变/协变
[参考链接](https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html)
# 一般命令式编程语言
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587044508565-90d51bcd-1daa-483c-8fdc-5a6887d9fd92.png#align=left&display=inline&height=244&margin=%5Bobject%20Object%5D&name=image.png&originHeight=411&originWidth=923&size=128062&status=done&style=none&width=547)


### 函数签名与函数声明
[参考链接](https://stackoverflow.com/questions/2322736/what-is-the-difference-between-function-declaration-and-signature/2323005#2323005)
函数声明是一个函数的原型或者说一个函数的定义，函数声明包括了函数名定义、参数类型和返回值类型


函数签名是函数声明中编译器用来执行重载解析的部分。重载函数由于具有相同的名字，编译器需要对重载函数进行重载解析，来确定函数调用时是调用重载函数中的哪个。参与重载解析的函数信息包括参数类型但不包括返回值类型。如果函数是类成员，那么参与重载解析的还包括CV-限定符（如果有）和成员函数对应的类

```typescript
//函数声明
let add = (x:number, y:number) => number

```
### 
### JS正则回溯
#### Round 1
用正则表达式 /^(a*)b$/ 匹配字符串 'aaaaab'，很明显，捕获组捕获到字符串 'aaaaa'
#### Round 2
如果将正则表达式换成 /^(a*)ab$/，继续匹配字符串 'aaaaab'
匹配过程

1. 匹配开始，(a*) 捕获尽可能多的 a。
1. (a*) 一直捕获，知道遇到字符 b，这是 (a*) 已经捕获了 'aaaaa'。
1. 正则继续执行 (a*) 之后的 ab 匹配，但是字符已经只剩下一个 b，匹配无法进行
1. (a*) 将捕获的 'aaaaa' 中‘吐出’一个 a， 这时 (a*) 捕获 'aaaa'，剩余字符串 ab。
1. 重新执行正则中 ab 的匹配，匹配成功。(a*) 捕获结果为 'aaaa'。

上述 (a*) 将捕获结果吐出一个 a 的过程，就叫回溯
### Round 3
如果将正则表达式改成 /^(a*)aaaab$/，那么整个匹配过程就要回溯4次；当正则表达式不恰当，就会导致性能问题


# 周六: JavaScript Grammer

## 字符集
- ASCII
- Unicode
- UCS U+0000 ~ U+FFFF
- GB (国标)
  - GB2312
  - GBK(GB13000)
  - GB18030
- ISO-8859
- BIG5(台湾，繁体）
- BMP (U+0000 ~ U+FFFF) 基本字符区域
### Unicode 字符集
[Unicode官网](https://home.unicode.org/)
[Unicode参考网站](https://www.fileformat.info/info/unicode/)


### String.fromCharCode() 和 String.fromCodePoint()
**String.fromCharCode()** 方法返回由指定的UTF-16代码单元序列创建的字符串
**String.fromCodePoint()** 返回使用制定的代码点序列创建的字符串
```javascript
const str1 = String.fromCharCode(97)
console.log(str1) //"a"

console.log(String.fromCodePoint(0xfefef, 9898)) //󾿯⚪

console.log("a".codePointAt()) //97
```
String.formCharCode() 方法返回由指定的UTF-16
## JavaScript InputElement
### WhiteSppace 空白符
| Abbreviation | Code Point | Description |
| --- | --- | --- |
| <TAB> | U+0009 | 制表符  \t |
| <VT> | U+000B | 纵向制表符  \v |
| <FF> | U+000C | 换页符  \f |
| <SP> | U+0020 | 普通空格  (只用这个就可以了） |
| <NBSP> | U+00A0 | 空格之间两个词连在一次，换行时，两个词一起换行 |
| <ZWNBSP> | U+FEFF | 零宽的<NBSP>空格 |
| <USP> | .... | 其他Unicode 空格 |



### LineTerminator 换行符
| Abbreviation | Code Point | Descript |
| --- | --- | --- |
| <LF> | U+000A | 换行符  \n |
| <CR> | U+000D | 回车符  \r |
| <LS> | U+2028 | 分行符（不要用） |
| <PS> | U+2029 | 分段符（不要用） |



### Comment 注释
```javascript
//这个单行注释

/*
这个多行注释
*/

/*/*多行注释不可以嵌套，这是错误的*/*/

```


### Token -> IdentifierName 标识符
参考文档：[http://www.unicode.org/reports/tr31/](http://www.unicode.org/reports/tr31/) 
#### 标识符开头
| 标识符开头字符 | 用法 |
| --- | --- |
| Unicode ID_start 字符 | 大小写字母等，详细请看参考文档 |
| $ | 模板字符串`${}`，CSS选择器$("div>p") |
| _  下划线 | _ , _VariableName |
| \  反斜杠 | 详细请看反斜杠内容 |

#### Keywords 关键字
_**await break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof new return super switch this throw try typeof var void while with yield**_


future reserved word : _**enum**_
_
let, undefined 不是关键字原因：let 和 undefined 是全局的变量，无法修改，只有在局部作用域里才能修改并使用
```javascript
function test() {
  var let = 2
  var undefined = 3
  console.log(let,undefined)
}

test() //2 3
```
#### \  反斜杠用法
| 转义序列 | Code Point | 描述 |
| --- | --- | --- |
| \b | U+0008 <BACKSPCE> | <BS> 退格 |
| \f | U+000C | <FF> 换页符 |
| \n | U+000A | <LF> 换行符 |
| \r | U+000D | <CR> 回车符 |
| \t | U+0009 | <TAB> 制表符 |
| \v | U+000B | <VT> 纵向制表符 |
| \' | U+0027 | ' 单引号 |
| \" | U+0022 | " 双引号 |
| \\ | U+005C | \ 反斜杠 |
| \u + Hex4Digits
\u + { CodePoint } | \u0000 \uffff | 输入某个Unicode字符 |
| \x + HexDigit HexDigit | \xff | 同上 |
| \ + DecimalDigit | \10 \15 | 同上 |

### 
### Token -> Literal
#### Number
Grammer

- DecimalLiteral
_**0-9
0   0.   .2   ****12.3E10/12.3e10**_
- BibaryIntergerLiteral 二进制
_**0 1**_
**_0b01/0B0101_**
- OctalIntergerLiteral 八进制
**_0-7_**
_**0o027/0O07**_
- HexIntegerLiteral 十六进制
**_0-F_**
**_0xae/0Xae_**

_ _

- ExponentIndicator
_**12.3E10/12.3e10**_



Encoding (运行时)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587284301234-7ae1c609-210b-42e3-8067-b3844a2f2ac7.png#align=left&display=inline&height=207&margin=%5Bobject%20Object%5D&name=image.png&originHeight=413&originWidth=848&size=24640&status=done&style=none&width=424)


#### String
Grammar
_**"abc"   'abc'   `abc`**_


Encoding (运行时)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587285124816-a22a9b13-f6ac-4fb4-905f-9e034901608b.png#align=left&display=inline&height=145&margin=%5Bobject%20Object%5D&name=image.png&originHeight=289&originWidth=933&size=19355&status=done&style=none&width=466.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587285139291-245bb9ed-5a15-4cc1-b56d-76045249b468.png#align=left&display=inline&height=135&margin=%5Bobject%20Object%5D&name=image.png&originHeight=248&originWidth=768&size=14556&status=done&style=none&width=419)
UTF8 表示超过一个字节的字符，需要三个字节来表示
**
#### Boolean
true false_
#### Null & undefined
null
undfined
void 0;_
### 正则表达式直接量
/[0-9]*/


## 随堂作业
### 作业1
写一个正则，匹配所有Number直接量
```javascript
//写一个正则，匹配所有Number
let reg = /^[.0-9]\d*(?:(?<!\.)\.?|[0-9]|(?<!\.)e(?=\d+)|(?<=0)[xbo](?=[0-9a-f]+))(?:\d*|(?<=b)[01]+|(?<=o)[0-7]+|(?<=x)[0-9a-f]+)$/


```


### 作业2
写一个UTF8 Encoding 的函数


### 作业3
写一个正则 匹配String(' '," ")字符
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587286019000-6abb06ed-765a-4daf-9103-85a202e96efc.png#align=left&display=inline&height=102&margin=%5Bobject%20Object%5D&name=image.png&originHeight=204&originWidth=914&size=36907&status=done&style=none&width=457)
```javascript
let re1 = /^"(?:[^'\\\u000a\u000d\u2028\u2029]|\\['"\\bfnrtv]|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[0-9]+)*"$/
let re2 = /^'(?:[^'\\\u000a\u000d\u2028\u2029]|\\['"\\bfnrtv]|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[0-9]+)*'$/
```

# 巴克斯-诺尔范式 BNF

## 概述
BNF是描述编程语言的文法。自然语言存在二义性，是一种非形式语言。这种模糊、不确定的方式无法精确定义这一总程序设计语言。<br/>
必须设计一种准确无误地描述程序设计语言的语法结构，这种严谨、简洁、易读的形式规则描述的语言结构模型称为文法。

## BNF 规则
双引号中的字（"word"）代表着这些字符本身
double_quote 代表双引号

| <> | 内包含为必选项 |
| --- | --- |
| [] | 内包含为可选项 |
| {} | 内包含的为可重复0次至无数次的项 |
| | | 表示左右两边任选一项，相当于“OR”的意思 |
| ::= | 表示“被定义为” |
| "..." | 术语符号，包含字符本身 |
| [...] |  选项，最多出现一次 |
| {...} | 重复项，任意次数，包括 0 次 |
| (...) | 分组 |
| 斜体字 | 表示参数？ |



下面是用BNF来定义的JAVA语言中的 for 语句的实例：
```
FOR_STATEMENT ::=
      "for" "(" ( variable_declaration |
  ( expression ";" ) | ";" )
      [ expression ] ";"
      [ expression ] ";"
      ")" statement
```

