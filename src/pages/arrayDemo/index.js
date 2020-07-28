import React from 'react';


const ArrayDemo = () => {
  test();
  return (
    <div>
      数组测试
    </div>
  );
};

const test = () => {
  let arr = [];
  // 1 push 添加一个新元素,返回数组的新的长度
  arr.push(1);
  arr.push(2);
  arr.push(3);
  arr.push(4);
  console.log(arr);

  // 2 pop 移除最后一个元素,并返回该元素
  arr.pop();
  console.log(arr);

  const arr1 = [10, 11, 12, 13, 14];

  // 3 concat 连接两个或多个数组吗，原数组不变，返回连接的新数组
  const arr2 = arr.concat(arr1, [29, 30], 100);
  console.log(arr);
  console.log(arr2);

  // 4 join 把数组拼成字符串以特殊的字符分割，默认是逗号
  const arr3 = arr2.join('-');
  console.log(arr3);

  // 5 reverse 反转数组里的元素 返回数组的引用
  const arr4 = arr2.reverse();
  console.log(arr2);
  console.log(arr4);

  // 6 shift 移除数组中的第一个元素并返回该元素
  const element = arr2.shift();
  console.log(element);
  console.log(arr2);

  // 7 slice 截取数组并返回截取后的数组，原数组不变
  const arr5 = arr2.slice(1, 3);
  console.log(arr5);
  console.log(arr2);

  // 8 sort 排序 默认按ASCII升序
  arr2.sort();
  console.log(arr2);
  // 可以传入compare函数
  arr2.sort((a, b) => a - b);
  console.log(arr2);

  // 9 splice 拼接
  const deleteArr = arr2.splice(0, 1);
  console.log(deleteArr);
  console.log(arr2);

  const deleteArr1 = arr2.splice(0, 1, 10086, 10087);
  console.log(deleteArr1);
  console.log(arr2);

  // 10 在数据头部插入元素
  arr2.unshift(10010, 10010);
  console.log(arr2);

  // 11 indexOf
  const index = arr2.indexOf(10010);
  console.log(index);
  console.log(arr2);

  // 12 lastIndexOf
  const lastIndex = arr2.lastIndexOf(10010);
  console.log(lastIndex);
  console.log(arr2);

  // 13 every 检查数组内所有元素是否都能通过指定函数的测试，返回是否通过的布尔值
  const every = arr2.every((item) => {
    return item > 10;
  });
  console.log(every);
  console.log(arr2);

  // 14 some  检查数组内元素是否有元素符合指定函数的测试，返回是否通过的布尔值
  const some = arr2.some((item) => {
    return item === 100;
  });
  console.log(some);
  console.log(arr2);

  // 15 forEach 对数组内的所有元素执行给定的函数
  arr2.forEach((item) => {
    console.log(item);
  });

  // 16 map
  const mapArr = arr2.map((item) => {
    return {
      id: item,
      flag: 'hi',
    };
  });
  console.log(mapArr);
  console.log(arr2);


  // 17 filter 筛选 返回通过指定函数筛选的元素组成的新数组
  const filterArr = arr2.filter((item) => {
    return item > 12;
  });
  console.log(filterArr);
  console.log(arr2);

  // 18 reduce
  // 累加
  const reduceResult = arr2.reduce((previousValue, currentValue) => {
    console.log('-----------------reduce start---------------------');
    console.log(previousValue);
    console.log(currentValue);
    console.log('-----------------reduce end---------------------');
    return previousValue + currentValue;
  }, 1);
  console.log(reduceResult);
  console.log(arr2);

  // 去重
  const reduceArr = arr2.reduce((previousValue, currentValue) => {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);
  console.log(reduceArr);
  console.log(arr2);

  // 19 reduceRight  从右到左的reduce
  // 累加
  const reduceRight = arr2.reduceRight((previousValue, currentValue) => {
    console.log('-----------------reduceRight start---------------------');
    console.log(previousValue);
    console.log(currentValue);
    console.log('-----------------reduceRight end---------------------');
    return previousValue + currentValue;
  }, 0);
  console.log(reduceRight);
  console.log(arr2);

  // 铺平二维数组
  const arrT2 = [[1, 2], [3, 4], [5, 6]];
  const reduceArrT2 = arrT2.reduce((previousValue, currentValue) => {
    return previousValue.concat(currentValue);
  }, []);
  console.log(reduceArrT2);
  console.log(arrT2);

  // 20 find 返回第一个符合条件的元素
  const find = arr2.find((item)=>{
    return item === 30;
  });
  console.log(find);
  console.log(arr2);

  // 21 findIndexOf 返回第一个符合条件的元素的index
  const findIndex = arr2.findIndex((item)=>{
    return item === 30;
  });
  console.log(findIndex);
  console.log(arr2);


};

export default ArrayDemo;
