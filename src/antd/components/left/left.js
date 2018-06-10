import React from 'react';
import * as Actions from '../../actions/actions'
import {connect} from 'react-redux';

import { Layout, Menu, Icon, Button } from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Left extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const apiUrl = '/test'
    // `/data/cityinfo/${cityCode}.html`;
    fetch(apiUrl).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }
      response.json().then((responseJson) => {
        console.log(responseJson)
        // this.setState({weather: responseJson.data});
      }).catch((error) => {
        // this.setState({weather: null});
      });
    }).catch((error) => {
      // this.setState({weather: null});
    });
  }
  render() {
    const { leftMenu } = this.props
    return (
      <div>
              <Sider
          trigger={null}
          collapsible
          collapsed={leftMenu}
        >
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={leftMenu}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
        </Sider>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    leftMenu: state.leftMenu
  }
}
export default connect(mapStateToProps, null)(Left);
