import React from 'react';
import _ from 'lodash';


const Question = () => {
  test();
  return (
    <div>
      question
    </div>
  );
};

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
  console.log(jsonObject);
  console.log(obj);

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
  // componentWillReceiveProps


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

};

export default Question;
