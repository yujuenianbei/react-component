import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from './head/header'
import Left from './left/left'
import './main.css';
import { Layout, Spin, Icon } from 'antd';
const { Sider } = Layout;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class App extends Component {
    state = { loading: true }
    render() {
        const { leftMenu } = this.props
        return (
            <div className='body'>
                <Spin spinning={this.state.loading} indicator={antIcon} wrapperClassName='body' delay={500}>
                    <Layout className='body'>
                        <Sider
                            trigger={null}
                            collapsible
                            collapsed={leftMenu}
                        >
                            <Left />
                        </Sider>
                        <Layout>
                            <Head />
                        </Layout>
                    </Layout>
                </Spin>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        leftMenu: state.leftMenu
    }
}
export default connect(mapStateToProps, null)(App);