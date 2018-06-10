import React,{Component} from 'react';
import './drop.css';
export default class Tab extends Component{
    constructor(){
      super();
      this.state ={
        drop: false,
        users: [{id:1,name: '张三'}, {id:2, name: '李四'}, {id: 2, name: "王五"}]
      }
      this.handleClick=this.handleClick.bind(this);
    }
  handleClick(e){
    this.setState({drop: !this.state.drop});
  }
    render(){
      return(
        <div>
            {this.state.users.map(u => 
            <div key={u.id}>
                <div className="outer" >
                    <button type="button" onClick={this.handleClick}>
                        <span>12345678</span>
                    </button>
                </div>
                <div className='buttonContent' style={{top: this.state.drop ? '0px':'10px',}}>
                </div>
            </div>)
            }

        </div>
      )
    }
}





