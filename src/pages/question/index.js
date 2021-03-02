import React, { Component } from 'react';
import _ from 'lodash';


class Question extends Component {

  componentDidMount() {
    // console.log(this.props.children);
  }

  componentWillReceiveProps(nextProps,nextContent){

  }

  render() {
    test();
    return (
      <div>
        question
      </div>
    );
  }
}

const test = () => {
  console.log('面试问题总结');
  // 1 深拷贝和浅拷贝

  // 深拷贝复制了对象 浅拷贝复制了引用
  const obj = {
    name: '张三',
    book: {
      name: 'java',
    },
  };
  // 深拷贝的方式
  // JSON.stringify和JSON.parse
  const jsonString = JSON.stringify(obj);
  const jsonObject = JSON.parse(jsonString);

  obj.book.name = 'javaScript';
  console.log('深拷贝 JSON:',jsonObject);
  console.log('深拷贝:',obj);

  // lodash   cloneDeep
  const lodashObj = _.cloneDeep(obj);
  obj.book.name = 'lodash';
  console.log(lodashObj);
  console.log(obj);
  console.log(obj === lodashObj);

  // 递归

  // 浅拷贝
  // Object.assign()
  const assignObj = {};
  Object.assign(assignObj, obj);
  obj.book.name = 'assign';
  obj.name = '李四';
  console.log(assignObj);
  console.log(obj);
  console.log(obj === assignObj);

  // 扩展运算符 ...
  const obj1 = { ...obj };
  obj.book.name = 'obj1';
  obj.name = '王五';
  console.log(obj1);
  console.log(obj);


  // 2 react 生命周期
  // constructor  componentWillMount  render  componentDidMount  componentWillUnMount
  // componentWillUpdate render componentDidUpdate
  // shouldComponentUpdate  ( return boolean )



  // 3 数组去重

  const arr = [1, 2, 3, 4, 5, 6, 0, 4, 3, 2, 1];

  // set
  console.log(Array.from(new Set(arr)));
  console.log([...new Set(arr)]);

  // reduce
  const arr1 = arr.reduce((previousValue, currentValue) => {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);
  console.log(arr1);

  // 4 flex布局
  // position flex
  // justify-content 主轴方向排列
  // align-items     交叉轴排列
  // align-self      单独子容器交叉轴排列


  // 5 虚拟DOM  virtual DOM
  // virtual DOM是用javaScript对象对DOM的抽象（ 原生dom在内存中的js对象映射 ）
  // 为什么使用virtual DOM
  // 1 无需手动操作DOM
  // 2 可以批量更新 频繁状态变更减少页面的渲染次数
  // 3 跨平台渲染
  // 4 diff算法
  // diff算法
  // 1 diff算法的时间复杂度为O(n)
  // 2 两个不同类型的元素会产生不同的树 不同类型元素会删除
  // 3 可以通过key prop来暗示哪些子元素在不同的渲染下能保持稳定


  // 6 setState过程
  // setState过程分析、
  // setState()将对state的更改排入队列，并通知React需要使用更新后的state组件和子组件
  // setState()并不总是立即更新组件，它会批量推迟更新
  // setState(updater, callback)
  // 将setState()视为请求而不是立即更新组件的命令
  // 非合成事件和生命周期函数（ 原生点击事件 setTimeout fetch等 ）是同步执行的
  // 合成事件和生命周期函数不是同步执行的

  // 7 hook
  // 目的
  // 1 加强函数组件 在不使用class的情况下使用state和以及其他react特性
  // 2 在组件间复用逻辑很难 没有hook之前 复用逻辑使用高阶组件和render props
  // 3 复杂组件难以理解 生命周期里耦合不同的逻辑 容易产生bug
  // useState useContext useReducer useEffect
  // useState    接收一个初始值参数 返回一个数组 0 state 1 setState
  // useContext  共享状态钩子
  // useReducer  action钩子 参数 reducer initState 返回值 [state dispatch]
  // useEffect   副作用钩子  参数  1 fun 副作用函数 2 [] 依赖数组 useEffect可以返回一个函数用于在卸载时清除函数
  // hook规则
  // 1 只在最顶层使用hook
  // 2 只在React函数中调用hook(函数组件和自定义hook)

  // 8 redux
  /**
   * redux A Predictable State Container for JS Apps
   * js项目里一个可预测的状态容器
   *
   * 特点
   * Predictable 可预测
   * Centralized 集中化
   * Debuggable  可测试
   * Flexible    灵活的
   *
   * 数据流：redux是单向数据流
   * view/server--->dispatch(action)-----store(reducer)--->state---->view
   * store   全局数据中心
   * action  描述state发生了什么变化
   * reducer 修改state(纯函数)
   *
   * 三大原则
   * 1 单一数据源
   * 整个应用的state被存在一棵object tree中 而这个object tree被存在唯一的store中
   * 2 state是只读的
   * 唯一改变state的方式就是触发action，action是一个描述已发生事件的普通对象
   * 3 使用纯函数来执行修改
   *
   *
   * react-redux
   * 容器组件和展示组件
   * 容器组件            描述如何运行（数据获取、状态更新）需要有state
   * 展示组件（UI组件）   描述如何展现（骨架、样式）
   * <Provider>包装根节点，是整个应该的组件都可以使用store里的数据
   * connect
   * mapStateToProps
   * mapDispatchToProps
   *
   * 中间件（Middleware）
   * 提供的是位于action被发起之后，到达reducer之前的扩展点，可以用来记录日志，创建崩溃报告调用异步接口或路由
   *
   *
   *
   */

  // 9 宏任务与微任务
  /**
   * javaScript宏任务与微任务
   * 参考链接 https://www.cnblogs.com/Ryan368/p/11338717.html
   * 宏任务队列----微任务队列（下一个宏任务里的微任务还没有加入到微任务队列里）-----宏任务队列-----微任务队列
   * 宏任务队列可以有多个 微任务队列只有一个
   * 创建宏任务的有：setTimeout() setInterval() requestAnimationFrame()
   * 创建微任务的有：Promise回调 process.nextTick
   *
   *
   * 执行结果 宏任务（ 1 5 8 ） 微任务（ 6 ） 宏任务（ 2 3 ）微任务（ 4 ） 宏任务（ 7 ）
   */

  // 10 css position
  // 1 static 元素在常规流中当前的位置
  // 2 relative 相对正常位置偏移给定的值
  // 3 absolute 脱离文档流

  // 11 promise
  // 1 什么是promise
  // promise是异步编程的解决方案 里面包含未来才会结束的某个事件（异步操作）的结果 可以将异步操作以同步操作的流程表达出来
  // 2 promise的三种状态
  // pending-进行中  fulfilled-已成功  rejected-已失败   一旦状态改变就不会再变
  // 3 promise 用法
  // promise构造函数接收一个函数作为参数，这个函数的两个参数分别是 resolved rejected


  // 11 判断数组是否是数组
  // Array.isArray()
  // instanceof
  // arr100.constructor === Array


  // 12 找出数组里重复次数最多的元素
  function findMaxRepeatedElement(arr) {
    if (!Array.isArray(arr)) {
      return;
    }
    if (arr.length === 1) {
      return arr[1];
    }
    // 找出重复最多元素的次数 并把元素和重复次数存入map
    const map = new Map();
    const maxCount = arr.reduce((maxCount, item) => {
      map.set(item, map.get(item) ? map.get(item) + 1 : 1);
      return map.get(item) > maxCount ? map.get(item) : maxCount;
    }, 0);
    // 找出重复最多的元素和重复的次数
    return [...map].filter((item) => item[1] && item[1] === maxCount);
  }

  const arr100 = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 8, 1, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24];
  console.log(findMaxRepeatedElement(arr100));


  // 13 给定一个数组，里面的元素全部由0和1组成 计算其中最大连续1的个数
  const arr200 = [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1];
  console.log(Math.max(...arr200.join('').split('0').map((item) => item.length)));

  // 14 css 居中
  // 水平居中 text-align center
  // 垂直居中 line-height : height
  // flex

  // 15 flex 布局
  // flex 是 Flexible Box 的缩写 弹性布局
  // display : flex
  // 采用flex布局的元素 称为flex容器 flex container 它的所有子元素称为容器成员 flex item
  // 容器分为主轴（ main axis ）和 交叉轴（ cross axis ） 项目默认延主轴排列

  // 容器属性
  // flex-direction 主轴的方向 row（ 行 水平方向 ）column（ 列 ）row-reverse column-reverse
  // flex-wrap 如何换行  nowrap 默认不换行 wrap 换行 第一行在上方 wrap-reverse 第一行在下方
  // justify-content 项目在主轴上的对齐方式 flex-start flex-end center space-between ( 两端对齐 项目间隔相等 )
  // space-arrow（ 间隔相等 ）
  // align-items 交叉轴的对齐方式 flex-start flex-end center baseline stretch ( 默认值 item未设置高度/auto 充满容器高度 )
  // align-content 多根轴线的对齐方式 flex-start flex-end center space-between space-arrow stretch
  // flex-flow ( flex-direction flex-wrap 简写 ) 默认值是row nowrap

  // 项目属性
  // order item的排列顺序 数值越小越靠前 默认是0
  // flex-grow 权重
  // flex-shrink 项目缩小比例
  // flex-basis 在分配多余空间之前，项目占据的主轴空间
  // flex ( flex-grow flex-shrink flex-basis 的简写 ) 默认值是 0 1 auto 后两个属性可选
  // align-self item的对齐方式 可以覆盖align-items auto ( 默认值使用align-items ) | flex-start | flex-end | center | baseline | stretch


  // 15 面试题
  const showModal = (flag) => {
    // 模拟展示弹窗
    console.log('modal shown!' + flag);
  };


  function wrapShowModal(time, n) {
    // 代码逻辑
    const timeArray = [];
    return function() {
      // 实际在业务代码中会调用这个 function
      // 满足特定条件调用 showModal();
      const currentTime = +new Date();
      if (timeArray.length < n) {
        timeArray.push(currentTime);
        showModal();
        return;
      }

      if (currentTime - timeArray[0] > time * 1000) {
        timeArray.shift();
        timeArray.push(currentTime);
        showModal();
      }
    };
  }


  const wrapped = wrapShowModal(10, 3); // 每 10 秒最多展示 3 次

  wrapped(1); // 会打印
  setTimeout(() => {
    wrapped(2); // 会打印
  }, 3e3);
  setTimeout(() => {
    wrapped(3); // 会打印
  }, 6e3);
  setTimeout(() => {
    wrapped(4); // 会打印
  }, 11e3);
  setTimeout(() => {
    wrapped(5); // 不会打印
  }, 12e3);
  setTimeout(() => {
    wrapped(6); // 会打印
  }, 13e3);
  setTimeout(() => {
    wrapped(7); // 不会打印
  }, 15e3);




  // 16 http
  // http ssl tcp ip 数据链路层 物理层
  // url  scheme(协议) host(主机) port(端口) path(路径) search(查询) frag(片段)
  // url---获取主机名---DNS---获取端口号---建立TCP连接（三次握手）---发送request---收到响应---关闭连接（四次挥手）
  // 状态码 200 ok 302 重定向 304 资源未改变 可直接使用缓存 404 Not Found 500 服务器错误 502 Bad Gateway 网关错误 504 网关超时


  // 17 函数的防抖与节流
  // 函数防抖和函数节流都是防止某一时间频繁触发
  // 防抖是间隔某一段时间后执行    节流是单位时间内之触发一次

  // 18 css3新特性
  // 边框圆角 border-radius
  // 阴影     box-shadow
  // 对文字加特效 text-shadow
  // 线性渐变  linear-gradient
  // 径向渐变  radial-gradient

  // 19 typeof
  const type1 = { name : '张三'};
  console.log(typeof type1);  // object

  const type3 = [];
  console.log(typeof type3);  // object

  const type4 = () => {};
  console.log(typeof type4); // function


  // 20 PureComponent
  // React.PureComponent 与 React.Component 很相似
  // 两者的区别在于 React.Component 并未实现 shouldComponentUpdate()
  // 而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数

  // 21 antd form
  // 获取表单数据 validateFields

  // 22 作用域
  // 变量（基本数据类型和引用数据类型）的执行环境
  // 可以分为全局作用域和函数作用域
  // 作用域是在运行时代码中的某些特定部分中变量，函数和对象的可访问性。换句话说，作用域决定了代码区块中变量和其他资源的可见性

  // 23 var const let 区别
  // 变量提升 var存在变量提升 const和let不存在变量提升
  // 暂时性死区 const和let存在暂时性死区
  // 重复声明  const和let不允许重复性声明
  // let为javaScript新增了块级作用域   ES5只有全局作用域和函数作用域

  // 24 async await generator
  // async await 是generator函数的语法糖
  // generator函数是个状态机 封装了很多内部状态 返回一个遍历器对象

  // 25 DOM API
  // document.getElementById 根据id获取元素
  // document.getElementByName 根据name获取元素
  // document.getElementByClassName 根据类名获取元素
  // document.querySelector 根据选择器获取元素
  // document.querySelectorAll 根据选择器获取元素
  // document.createElement 创建元素节点

  // 26 受控组件和非受控组件
  // 受控组件 表单元素通过组件的state来维护自己的state 并根据用户输入调用setState()来进行数据跟新
  // 非受控组件 表单组件没有value props
  // 受控组件的优点 实时表单验证 有条件禁用 强制输入格式

  // 27 闭包
  // 闭包是指有权访问另一个函数作用域中的变量的函数
  // 创建闭包的方式-在一个函数内部创建另一个函数
  // 延长函数的作用域链 模拟块级作用域 在对象中创建私有变量

  // 28 原型和原型链
  // 原型
  // 原型对象是用来存放特定类型的所有实例共享的属性和方法 每个函数都会有prototype属性（指针）指向原型对象
  // 默认情况下原型对象会有一个constructor属性 指向该类型的构造函数 我们可以给原型对象添加其他的属性和方法
  // 实例对象通过_proto_指向构造函数的原型对象  而不是指向构造函数
  // 原型链
  // 将一个类型的实例赋值给另一个构造函数的原型来实现

  // 29 继承
  // 组合式继承 使用原型链继承共享的属性和方法 使用借用构造函数继承实例的属性


};

export default Question;
