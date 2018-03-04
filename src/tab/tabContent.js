import React,{Component} from 'react';
export default class Content extends Component{
    render(){
        return(
            <div className={this.props.contentClass(this.props.index)} >{ this.props.val  }</div>
        )
    }
}