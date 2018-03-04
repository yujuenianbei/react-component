import React from 'react';
import Num from './tabHeader'
import Content from './tabContent'
import './tab.css'
export default class App extends React.Component{
    constructor(props){
        super(props);
        // 传入的数据
        this.tm=[{
            'title':'tabOne',
            'content':'切换1',
          },{
            'title':'tabTwo',
            'content':'切换2',
          },{
            'title':'tabThree',
            'content':'切换3',
          }]
        //  默认状态
        this.state={
            current:0,
        }
        // 函数绑定
        this.handleClick = this.handleClick.bind(this);
        this.currentClass = this.currentClass.bind(this);
        this.contentClass = this.contentClass.bind(this);
    }
    // 点击事件（给当前的加上class）
    handleClick(index){
        this.setState({current:index})
    }
    // tab头部切换的判断
    currentClass(index){
        return this.state.current ===index ? 'current':'';
    }
    // 内容的判断（保证要和头部的相一致）
    contentClass(index){
        return this.state.current === index? 'active':''
    }

    render(){
        // console.log(this.state)
        return(
            <div className='tab'>
                <div className='tabHeader'>
                    {/* map value对应单条的所有数据 index对应个数 */}
                    {this.tm.map((value,index)=>{
                        return (
                            // key={index} index={index}
                            <Num currentClass = {this.currentClass} handleClick={this.handleClick} value={value} key={index} index={index}/>
                        )
                    })}
                </div>
                <div className='tabContent'>
                    {this.tm.map((value,index) =>{
                        return (
                            <Content contentClass={this.contentClass} key={index} index={index} value={value}/>
                        )
                    })}    
                </div>    
            </div>
     
        )
    }
}