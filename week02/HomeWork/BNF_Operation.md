## 课堂练习1
编写一个带括号的四则运算产生式
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