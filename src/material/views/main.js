import React from 'react';
import HeaerTop from './header/header'
import Left from './left/left'
import Right from './right/right'
import { connect } from 'react-redux';

import './main.css'

class Header extends React.Component {
    constructor() {
        super();
        this.console = this.console.bind(this);
    }
    console = () => {
        console.log(this.props.openLeftList)
    }
    render() {
        return (
            <div>
                <div className={`${this.props.openLeftList === true ? 'bodyLeftActive' : 'bodyLeftDefault'} ${this.props.openRightList === true ? 'bodyRightActive':'bodyRightDefault'}` }>
                    <HeaerTop />
                </div>
                <div>
                    <Left />
                </div>
                <div>
                    <Right />
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        openLeftList: state.openLeftList,
        openRightList: state.openRightList
    }
}

export default connect(mapStateToProps, null)(Header);