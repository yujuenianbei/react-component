import React,{Component} from 'react';


export default class List extends Component{
    constructor(props){
        super(props);
    }
    handleClick(){
       this.props.handleClick(this.props.index);
    }
    render(){
      return(
          <div className={this.props.currentClass(this.props.index)} onClick={ this.handleClick.bind(this)} >{this.props.val}</div>
      )
    }
}