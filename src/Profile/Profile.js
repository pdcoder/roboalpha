import React, { Component } from 'react';
import { Breadcrumb, Layout, Icon, Divider} from 'antd';
import { Link } from 'react-router-dom';
const { Content } = Layout;

class Profile extends Component {

  render() {
    return (
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ height: '100vh', padding: 24, background: '#fff', textAlign: 'center' }}>
          <Breadcrumb style={{ textAlign: 'left' }}>
            <Breadcrumb.Item>
              <Link to="/"><Icon type="home" /></Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <Link to="/profile"><Icon type="user" /></Link>
              &nbsp;<span>Profile</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Divider>My Profile</Divider>


        </div>
      </Content>
    );
  }
}


export default Profile;