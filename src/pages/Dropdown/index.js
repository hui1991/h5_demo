import React from 'react';
import style from './index.less';
import PropTypes from "prop-types"

class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  handleMouseEnter() {
    this.setState({
      display: true,
    });
  }

  handleMouseLeave() {
    this.setState({
      display: false,
    });
  }

  render() {
    const { display } = this.state;
    const { items } = this.props;
    if (Array.isArray(items) || items.length === 0){
      return
    }
    return (
      <div
        className={style.content}
        onMouseEnter={() => {
          this.handleMouseEnter();
        }}
        onMouseLeave={() => {
          this.handleMouseLeave();
        }}
      >
        下拉菜单
        <ul className={style.drop_down} style={{ display: display ? 'block' : 'none' }}>
          {items.map((item) => (
            <li>
              <li>{item}</li>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

DropDown.propTypes = {

  items: PropTypes.array,

};

export default DropDown;
