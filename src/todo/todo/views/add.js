import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {add} from '../actions/action.js';

class Add extends React.Component{
    constructor(props,context){
        super(props,context);

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

        this.state = {
          value: ''
        };
    }

    onSubmit(ev) {
        ev.preventDefault();
    
        const inputValue = this.state.value;
        if (!inputValue.trim()) {
         return;
        }
    
        this.props.onAdd(inputValue);
        this.setState({value: ''});
      }
    
      onInputChange(event) {
        this.setState({
          value: event.target.value
        });
      }

    render(){
        console.log(this.state)
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input className="newTodo" onChange={this.onInputChange} value={this.state.value}/>
                    <button className="addBtn" type="submit" >新增</button>
                </form>
            </div>
        )
    }
}

// Add.propTypes = {
//     onAdd: PropTypes.func.isRequired
// };

const mapDispatchToProps = (dispatch) => {
    return {
      onAdd: (text) => {
        dispatch(add(text));
      }
    }
  };
  
export default connect(null, mapDispatchToProps)(Add);
  