import React from 'react';


const RegExpDemo = () => {
  test();
  return(
    <div>
      正则
    </div>
  )
};


const test = () => {
    console.log('---------------正则----------------');
  // const stringArr = Array.from(string10).reduce((previousValue, currentValue) => {
  //   if (/[A-Za-z|'?]/.test(currentValue)) {
  //     if (previousValue.lastIndexOf('?') === previousValue.length - 1) {
  //       if (currentValue === '?') {
  //         return previousValue;
  //       }
  //       return previousValue.concat(currentValue.toLocaleUpperCase());
  //     }
  //     return previousValue.concat(currentValue);
  //   }
  //   if (previousValue.lastIndexOf(0) === previousValue.length - 1) {
  //     return previousValue;
  //   }
  //
  //   return previousValue.concat(0);
  //
  // }, []);
  // console.log(stringArr.join('').replace(/\?/g, ''));
  // console.log(stringArr.join('').replace(/\?/g, '').replace(/0/g, ' '));


  const stringRegExp = 'I\'m?����driving�??�to�?beijing�?��after�breakfast';
  console.log(stringRegExp);
  // const string20 = string10.replace(/\?([a-z])/,(match,p1)=>{
  //   console.log('---------------正则----------------');
  //   console.log(p1);
  //   return p1.toLocaleUpperCase();
  // });
  // console.log(string20);
  //
  // const string30 = string20.replace(/�\?*�*|\?\?*�*/g," ");
  // console.log(string30);

  const result = stringRegExp.replace(/�\?*�*([a-z])|\?\?*�*([a-z])/g, (match, p1, p2) => {
    console.log(match);
    console.log(p1);
    console.log(p2);
    const p = p1 ? p1 : p2;
    if (match.substring(match.length - 2, match.length - 1) === '?') {
      return ' ' + p.toLocaleUpperCase();
    }
    return ' ' + p;
  });
  console.log(result);
};

export default RegExpDemo;
