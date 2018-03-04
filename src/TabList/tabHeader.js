import React from 'react';

export default class Num extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:props.tm
        }
    }
    // 点击事件要继承父组件的
    handleClick(){
        this.props.handleClick(this.props.index);
     }
    render(){
        // console.log(this.props.value);
        return(
            // 父组件中的参数要和这里定义的相一致 （添加class 点击事件 输出的数据）
            <div className={this.props.currentClass(this.props.index) +' tabList'} onClick={ this.handleClick.bind(this)} >{this.props.value.title}</div>
        )
    }
}