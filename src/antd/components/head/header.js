import React, { Component } from 'react';
import * as Actions from '../../actions/actions'
import { connect } from 'react-redux';
import './head.css';
// 栅格
// import { Row, Col } from 'antd';
// import Button from 'antd/lib/button';
import { Layout, Menu, Icon, Avatar, Badge, Dropdown, Spin} from 'antd';
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

const { Header } = Layout;
class Head extends Component {
    constructor(){
        super();
    }
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        const { Ontoggle, leftMenu } = this.props
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={leftMenu ? 'menu-unfold' : 'menu-fold'}
                    onClick={Ontoggle}
                />
                <Dropdown overlay={menu} placement="bottomLeft"  trigger={['hover']}>
                    <span style={{ marginRight: 24 }}>
                        <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
                    </span>
                </Dropdown>
                {/* <Spin indicator={antIcon} /> */}
            </Header>
        );
    }
}

function mapStateToProps(state) {
    return {
        leftMenu: state.leftMenu
    }
}
function mapDispatchToProps(dispatch) {
    return {
        Ontoggle: () => {
            dispatch(Actions.leftMenu('leftMenu'));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Head);