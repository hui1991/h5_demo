import { Component } from 'react';
import { connect, useSelector } from 'react-redux';


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
 * 整个应用的state被存在一课object tree中 而这个object tree被存在唯一的store中
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
class ReduxDemo extends Component{

}

export default connect()
