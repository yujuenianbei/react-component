import React from 'react';
import List from './chilren'

export default class Father extends React.Component {
    render() {
        return (
            <div>
                <List num="first" />
                <List num="second" />
                <List num="third" />
            </div>
        )
    }
}
