import React, { Component } from 'react';

/**
 * 生命周期样例
 */
class LifeCycle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: 0,
    };
    console.log('constructor invoke');
  }

  componentWillMount() {
    console.log('componentWillMount invoke');
  }

  componentDidMount() {
    console.log('componentDidMount invoke');
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate invoke'+" nextState = "+nextState.flag);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate invoke'+" prevState = "+prevState.flag);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext){
    console.log('shouldComponentUpdate invoke'+" nextState = "+nextState.flag);
    return true
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        点击更新
      </button>
    );
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        flag: prevState.flag+1,
      };
    });
  }

}

export default LifeCycle;
