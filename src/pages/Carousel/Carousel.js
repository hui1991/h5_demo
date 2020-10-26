import React, { Component } from 'react';
import style from './index.less';


class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handleChildren() {
    const { children } = this.props;
    let childrenArray = [];
    if (!children) {
      return undefined;
    }
    if (Array.isArray(children)) {
      childrenArray = children;
    } else {
      childrenArray.push(children);
    }
    return childrenArray;
  }

  handleDotClick(selectIndex) {
    const { currentIndex } = this.state;
    if (currentIndex === selectIndex) {
      return;
    }
    this.setState({
      currentIndex: selectIndex,
    });
  }

  renderDots(childrenArray) {
    return childrenArray.map((item, index) => {
      return (
        <div className={style.dot} onClick={() => {
          this.handleDotClick(index);
        }}/>
      );
    });
  }

  render() {
    const { currentIndex } = this.state;
    const childrenArray = this.handleChildren();
    if (!childrenArray) {
      return null;
    }
    return (
      <div className={style.content}>
        {childrenArray[currentIndex]}
        <div className={style.dots_layout}>
          {this.renderDots(childrenArray)}
        </div>
      </div>
    );
  }
}

export default Carousel;
