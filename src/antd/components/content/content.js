import React from 'react';
import Left from '../left/left';
import * as Actions from '../../actions/actions';
import {connect} from 'react-redux';
import Header from '../head/header';
import { Layout, Menu, Icon } from 'antd';
// const { Content } = Layout;

class Content extends React.Component {
  render() {
    return (
      <Layout>
          <Header />
          {/* <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content> */}
      </Layout>
    );
  }
}
function mapStateToProps(state){
    return {
      leftMenu: state.leftMenu
    }
  }
  export default connect(mapStateToProps, null)(Content);