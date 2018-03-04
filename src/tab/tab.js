import React,{Component} from 'react';
import List from './tabList';
import Content from './tabContent';

export default class Tab extends Component{
    constructor(){
      super();
      this.state ={
        list : ['导航一','导航二','导航三'],
        content:[
         {item:'内容一'},
         {item:'内容二'},
         {item:'内容三'}
       ],
        current:0
      }
    }
  handleClick(index){
    this.setState({ current:index});

  }
  currentClass(index){

    return this.state.current === index ? 'current' : '';
  }
  contentClass(index){
    return this.state.current === index ? 'active' : '';
  }
    render(){
      return(
        <div id="outer" >
            <ul id="tab" >
              { this.state.list.map( (val,index ) => {
                    return (<List currentClass={this.currentClass.bind(this)} handleClick={this.handleClick.bind(this)} val={val} key={index} index={index} /> )
              }) }
            </ul>
            <div id="content" >
              { this.state.content.map( ( val,index ) => {
                  return ( <Content key={index} val={val.item} index={index}  contentClass = { this.contentClass.bind(this) } /> )
              })}

            </div>
        </div>
      )
    }
}





