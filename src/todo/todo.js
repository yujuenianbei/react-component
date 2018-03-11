import React from 'react';
import Todo from './todo/index';
import Filter from './filter/index'
 
export default class App extends React.Component{
    render(){
        return(
            <div>
                <Todo />
                {/* <Filter />    */}
            </div>
        )
    }
}