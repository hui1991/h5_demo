import React, { Component } from 'react';


/**
 * setState过程分析、
 * setState()将对state的更改排入队列，并通知React需要使用更新后的state组件和子组件
 *
 * setState()并不总是立即更新组件，它会批量推迟更新
 * setState(updater, callback)
 *
 * 将setState()视为请求而不是立即更新组件的命令
 */
class SetStateDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.getElementById('native_click').addEventListener('click', this.handleNativeClick.bind(this));
  }

  /**
   * 非合成事件和生命周期函数（ 原生点击事件 setTimeout fetch等 ）是同步执行的
   */
  handleNativeClick() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    }, () => {
      console.log('原生事件 setState callback count = ' + this.state.count);
    });
    console.log('原生事件 count = ' + this.state.count);
  }

  /**
   * 合成事件和生命周期函数不是同步执行的
   */
  handleClick() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    }, () => {
      console.log('合成事件 setState callback count = ' + this.state.count);
    });
    console.log('合成事件 count = ' + this.state.count);

  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          合成点击事件
        </button>
        <button id="native_click">
          原生点击事件
        </button>
      </div>
    );
  }

}

export default SetStateDemo;
