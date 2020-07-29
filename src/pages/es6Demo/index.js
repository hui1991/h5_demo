import React from 'react';


const Es6Demo = () => {
  test();
  return (
    <p>
      ES6
    </p>
  );
};

const test = () => {
  // 1 let 只在申明的代码块里有效
  for (let a = 0; a < 10; a++) {
    console.log(a);
  }

  for (var b = 0; b < 10; b++) {
    console.log(b);
  }

  // console.log(a);
  console.log(b);

  // 不存在变量提升 暂时性死区 不允许重复声明
  // ES5只有全局作用域和函数作用域，没有块级作用域，let为javaScript新增了块级作用域
  // 暂时性死区 ： ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错
  // 为什么要有块级作用域 1 内层变量可能会覆盖外层变量  2 泄露为全局变量

  console.log('---------------------块级作用域-------------------------');
  var test = 10;
  if (true) {
    var test = 19;
  }
  console.log(test);
  if (true) {
    let test = 30;
  }
  console.log(test);

  // 块级作用域和函数申明
  // ES6允许在块级作用域里声明函数 函数声明语句的行为类似于let，在块级作用域之外不可引用


  // 2 const 声明了一个只读常量，一旦声明，常量的值就不能改变
  // 在块级作用域中声明也只在块级作用域中有效，也不存在变量提升，同样存在暂时性死区 只能在声明的位置后面使用
  // 常量保证的是常量指向的内存地址是不变的，但内存地址存储的对象是可变的
  console.log('---------------------const-------------------------');
  const obj = {};
  console.log(obj);
  obj.name = 'asan';
  obj.age = '20';
  console.log(obj);


  // 3 解构赋值 模式匹配 可以指定默认值 可以用于嵌套解构
  console.log('---------------------解构赋值-------------------------');
  // 数组 次序决定
  const [d1, , d2, d3, d4 = 3000] = [1, 2, 3, 4];
  console.log(d1);
  console.log(d2);
  console.log(d3);
  console.log(d4);

  // 对象 属性名决定 可修改属性名
  const dObj = {
    name: 'tom',
    age: '20',
    sex: '男',
    book: {
      book1: 'ES6入门',
    },
  };
  const { name: name1, age, sex, adr = '北京', book: { book1 } } = dObj;
  console.log(name1);
  // console.log(name);
  console.log(age);
  console.log(sex);
  console.log(adr);
  console.log(book1);

  // 字符串 类数组对象
  const [dStr1, dStr2, dStr3] = 'hello';
  console.log(dStr1);
  console.log(dStr2);
  console.log(dStr3);

  // 用途
  // 交换两个变量的值
  let x = 1;
  let y = 2;

  [x, y] = [y, x];
  console.log(x);
  console.log(y);
  // 输入模块指定方法

  // 字符串
  console.log('---------------------字符串-------------------------');
  // ES6为字符串添加了Iterator接口
  const string = 'hello';
  for (let str of string) {
    console.log(str);
  }
  // 模板字符串  ${} 可以进行运算 还可以调用函数
  let templateString = `我是模板字符串${1 + 2}`;
  console.log(templateString);
  const templateStringFun = () => '模板字符串调用函数';
  templateString = `我是模板字符串 ${templateStringFun()}`;
  console.log(templateString);

  // includes 是否包含
  const string1 = 'Hello World!';
  const stringIncludes = string1.includes('Hello');
  const stringIndexOf = string1.indexOf('Hello');
  console.log(stringIncludes);
  console.log(stringIndexOf);

  // startWiths
  const stringStartsWith = string1.startsWith('ello', 1);
  const stringStartsWith1 = string1.startsWith('ello', 0);
  console.log(stringStartsWith);
  console.log(stringStartsWith1);

  // endWiths
  const stringEndsWith = string1.endsWith('ld', string1.length - 1);
  const stringEndsWith1 = string1.endsWith('ld');
  console.log(stringEndsWith);
  console.log(stringEndsWith1);


  // repeat 重复
  console.log('repeat'.repeat(5));

  // padStart padEnd 补全
  console.log('padStart'.padStart(14, 'ab'));
  console.log('padEnd'.padEnd(14, 'ab'));

  // trimLeft trimRight
  console.log(' trimLeft '.trimLeft());
  console.log(' trimRight '.trimRight());

  // concat
  console.log('concat'.concat('add', 'strings'));

  // subString
  console.log('subString'.substring(3, 5));

  // toLocaleUpperCase  toLocaleLowerCase
  console.log('abc'.toLocaleUpperCase());
  console.log('HELLO'.toLocaleLowerCase());

  // slice
  console.log('subString'.slice(3, 5));

  // split
  console.log('a-b-c-d'.split('-'));

  // replace
  console.log('a-b-c-d'.replace(/([a-z])-/g, (match, p1) => {
    return p1.toLocaleUpperCase() + '_';
  }));

  // match
  console.log('abcd'.match(/[a-z]/g));

  console.log('abcd'[3]);

  // 函数
  console.log('---------------------函数-------------------------');
  // rest参数 rest是个数组 之后不能再有参数
  const fun = (...strings) => {
    console.log(typeof strings);
    console.log(strings);
    console.log(strings.join('-'));
  };
  fun('解', '放', '思', '想', '实', '事', '求', '是');

  // 箭头函数
  // 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象    使this的指向固定化  没有this(this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this)
  // 不能当做构造函数
  // 不能使用arguments对象

  // ES6
  function foo() {
    setTimeout(() => {
      console.log('id:', this.id);
    }, 100);
  }

  // ES5
  function foo() {
    var _this = this;

    setTimeout(function() {
      console.log('id:', _this.id);
    }, 100);
  }

  // 引用了外层的this
  // catch命令可以省略参数


  // 数组
  console.log('---------------------数组-------------------------');

  // 扩展运算符用来合并数组
  console.log([...[1, 2, 3], ...['a', 'b', 'c']]);
  // 扩展运算符用来复制数组（浅复制）
  console.log([...[1, 2, 3]]);

  // 解构赋值和扩展运算符结合使用   扩展运算符放在最后一位
  const [first, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(first);
  console.log(rest);

  // 扩展运算符将字符串转成数组
  // 任何定义了遍历器（Iterator）接口的对象都可以用扩展运算符转为真正的数组
  // 类似数组的对象（array-like object）和可遍历（iterable）的对象 可以使用Array.from()
  console.log([...'hello']);
  console.log(Array.from('hello'));

  // Array.of 将一组值转换为数组
  console.log(Array.of(1,2,3));

  // set
  console.log('---------------------set-------------------------');
  const set = new Set();
  set.add(1).add(1).add(2);
  set.add(3);
  console.log(set);
  console.log(set.size);
  set.delete(1);
  console.log(set);
  console.log(set.size);
  console.log(set.has(2));


  // 使用set数组去重
  console.log([...new Set([1,1,1,1,2,3,4,5,9,4,5,6,7])]);
  console.log(Array.from(new Set([1,1,1,1,2,3,4,5,9,4,5,6,7])));
  // 使用set字符串去重复的字符
  console.log([...new Set('abababcdeeeedfi')].join(''));

  // keys values entries   set key与value是一样的
  const set10 = new Set();
  set10.add('解放思想').add('实事求是');
  for (let key of set10.keys()){
    console.log(key);
  }

  for (let value of set10.values()){
    console.log(value);
  }

  for (let entries of set10.entries()){
    console.log(entries);
  }

  // map
  console.log('---------------------map-------------------------');
  const map = new Map([["name",'tom'],['age','19']]);
  console.log(map);
  map.set('sex','男');
  console.log(map);
  console.log(map.has('name'));
  map.delete('age');
  console.log(map);

  for (let key of map.keys()){
    console.log(key);
  }

  for (let value of map.values()){
    console.log(value);
  }

  for (let entries of map.entries()){
    console.log(entries);
  }
  map.clear();
  console.log(map);
};

export default Es6Demo;
