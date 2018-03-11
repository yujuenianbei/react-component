import React from 'react';
import store from './store'
import * as Actions from './action/action'

export default class List extends React.Component {
    constructor(props) {
        super(props)

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
        this.onChange = this.onChange.bind(this);

        this.getStoreState = this.getStoreState.bind(this);
        this.state = this.getStoreState();
    }

    getStoreState = () => {
        return {
            value: store.getState()[this.props.num]
        }
    }

    // 增 
    onIncrease = () => {
        store.dispatch(Actions.inc(this.props.num));
    }
    // 减
    onDecrease = () => {
        store.dispatch(Actions.dec(this.props.num));
    }
    onChange = () => {
        this.setState(this.getStoreState())
    }

    // 组件更新 只有当caption改变或者state中的count值变化之后返回true 更新状态
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.num);
        console.log(this.props.num);
        console.log(nextState.value);
        console.log(this.state.value);
        return (nextProps.num !== this.props.num) ||
            (nextState.value !== this.state.value);
    }
    // render渲染之后添加store状态的监听
    componentDidMount() {
        store.subscribe(this.onChange);
    }
    // 组件卸载 同时卸载store状态的监听
    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    render() {
        const value = this.state.value;
        const {counter} = this.props;

        console.log(this.getStoreState())
        // 获取store中的参数
        console.log(store.getState())
        // 获取store中对应存储的状态参数
        console.log(store.getState()[this.props.num])
        // 获取父元素传进来的参数
        console.log(this.props);
        // 获取父元素中的指定参数
        console.log(this.props.num);
        // 获取当前状态
        console.log(this.state)
        return (
            <div>
                <button onClick={this.onIncrease}>+</button>
                <button onClick={this.onDecrease}>-</button>
                <span>{counter} count : {value}</span>
            </div>
        )
    }
}
