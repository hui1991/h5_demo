import React from 'react';
import Question from '@/pages/question';

export default function() {
  return (

    // <Question/>
    <div>
      {test()}
    </div>
  );
}

function test () {

  const array11 = [1,0,9,8,4,6];
  console.log(sortTest(array11));



  const aa = 'oooppkkfff';
  aa.substring(1);

  let data = {pv:  ["10", "24", "44", "22", "16", "18", "64"],    uv:  ["20", "16", "43", "16", "11", "13", "54"],
       date:  ["2021-01-30", "2021-01-26", "2021-01-28", "2021-01-27", "2021-01-29", "2021-01-24", "2021-01-25"]};
  const pvArray = data.pv;
  const uvArray = data.uv;
  const dateArray = data.date;
  let array = pvArray.map((item,index)=>{
    return { date:dateArray[index],pv:item, uv:uvArray[index]}
  })
  array.sort((pre,cur)=>{
    return new Date(pre.date) - new Date(cur.date);
  })
  console.log(array);

  // 2. 实现一个函数 getParams，从URL中获取任意参例如：url = https://www.baidu.com?a=1&b=2&c=3&d=4#h
  // getParams(url, 'b') 得到2

  // 3. 有多层数组，例如[1, [2, [3, 4, [5]]]]请将数据扁平化，得到值 [1, 2, 3, 4, 5]
  const array1 = [1, [2, [3, 4, [5]]]];

  const resultArray = arrayExpand(array1);
  console.log(resultArray);


  const string = 'abbcccdddd';
  console.log(testString(string,3));

}

function testString (string,key) {
  const obj = {};
  string.split('').forEach((item)=>{
    obj[item] = obj[item]  ? obj[item]+1 : 1;
  })
  console.log(obj)
  return Object.keys(obj).reduce((per,cur)=>{
    return per.concat(obj[cur] >=key ?obj[cur]:[]);
  },[])
}

function getParams (url,key) {
  if (!url){
    return ''
  }
  const search = url.split("?") && url.split("?")[1];
  const searchArray = search.split('&');
  let paramMap = {};
  searchArray.forEach((item)=>{
    const resultArray = item.split('=');
    paramMap[resultArray[0]] = resultArray[1];
  })
  return  paramMap[key];
}

function arrayExpand (array){
  return array.reduce((per,cur) =>
    per.concat(Array.isArray(cur)?arrayExpand(cur):cur),[])
}

function sortTest(array){
  const result = array.sort((a,b)=>{
    return b-a;
  });
  return result.slice(0,3);
}


