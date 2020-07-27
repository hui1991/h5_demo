// 实现如下功能：
// 1. 如果在5秒内，点击 B组件内按钮， 如果计数 > 0, 则 A 的内容展示 "第 N 次点击"，否则 A 的内容展示 "等待点击"
// 如果超过5秒未发生按钮点击，则计数清零，此时 A 的内容展示 "等待点击"
// 点击 第一个按钮实现 -1  ; 点击 第二个按钮实现 +1 ；

// 2. 将按钮的样式实现成 https://element.eleme.cn/#/zh-CN/component/button 中 朴素主要按钮 的样式


import React, { Component } from 'react';
import styles from './index.less'

function A(props) {
  return <div>{props.message}</div>;
}

function B(props) {
  const { resultCount, handleClick } = props;
  return (
    <button
      className={styles.Button}
      onClick={() => {
        handleClick(resultCount);
      }}
    >
      click
    </button>
  );
}

class Ali extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // 计数
      count: 0,
      // 上一次点击时间
      previousTime: '',
      // 当前setTimeoutId
      setTimeoutId: '',
    };
  }

  render() {

    const { count, previousTime, setTimeoutId } = this.state;
    const message = this.buildMessage();

    console.log('count = ' + count);
    console.log('previousTime = ' + previousTime);
    console.log('setTimeoutId = ' + setTimeoutId);

    return (
      <div className="App">
        <A message={message} />
        <B resultCount={count - 1} handleClick={this.handleClick.bind(this)} />
        <B resultCount={count + 1} handleClick={this.handleClick.bind(this)} />
      </div>
    );
  }

  /**
   * 处理B组件按钮点击事件
   */
  handleClick(count) {
    const { previousTime } = this.state;
    const currentTime = new Date().getTime();
    // 距离上一次点击事件5秒内取消timeout
    if (currentTime - previousTime <= 5000) {
      this.cancelTimeout();
    }
    this.startTimeout();
    this.setState({
      count: count,
      previousTime: new Date().getTime(),
    });
  }

  /**
   * 构造A组件内的显示文案
   */
  buildMessage() {
    const { count } = this.state;
    return count > 0 ? `第 ${count} 次点击` : '等待点击';
  }

  /**
   * 开启timeout 5秒之后count设置为0
   */
  startTimeout() {
    const setTimeoutId = setTimeout(() => {
      this.setState({
        count: 0,
      });
    }, 5000);
    this.setState({
      setTimeoutId: setTimeoutId,
    });
  }

  /**
   * 取消timeout
   */
  cancelTimeout() {
    const { setTimeoutId } = this.state;
    clearTimeout(setTimeoutId);
  }


}

export default Ali;
