import React from 'react';

export default class Content extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            // 父组件中的参数要和这里定义的相一致 （添加class 点击事件 输出的数据）
            <div className={this.props.contentClass(this.props.index)+' tabContentText'} >{this.props.value.content}</div>
        )
    }
}