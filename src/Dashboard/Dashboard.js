import React, { Component } from 'react';
import { Breadcrumb,Layout, Form, Icon, Divider, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
const {Content } = Layout;

class Dashboard extends Component{

  render() {
    return (
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{height: '100vh', marginTop: 65, padding: 24, background: '#fff', textAlign: 'center' }}>
        <Breadcrumb style={{textAlign:'left'}}>
        <Breadcrumb.Item>
      <Link to="/"><Icon type="home" /></Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
    <Link to="/dashboard"><Icon type="dashboard"/></Link>
      &nbsp;<span>Dashboard</span>
    </Breadcrumb.Item>
  </Breadcrumb>
<Divider>Profile Strength</Divider>
      <br />
      <br />
<Divider>Exam Schedule</Divider>

      </div>
      </Content>
    );
  }
}


export default Dashboard;