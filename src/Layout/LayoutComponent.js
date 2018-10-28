import { Layout, Menu, Icon, Carousel } from 'antd';
import './LayoutComponent.css';
import SignupWrapped from '../Signup/Signup';
import React, { Component } from 'react';
import { Link,Route, withRouter, Switch,Router} from 'react-router-dom';
import Landing from '../Landing/Landing';
import Terms from '../Terms/Terms';
const { Header, Content, Footer, Sider } = Layout;
class LayoutComponent extends Component{
constructor(){
  super();
  this.state = {
    collapsed: false,
  };
}

toggle = () => {
  this.setState({
    collapsed: !this.state.collapsed,
  });
}
render(){
  return(
  <Layout> 
    <Sider  style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="bar-chart" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="cloud-o" />
          <span className="nav-text">nav 5</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="appstore-o" />
          <span className="nav-text">nav 6</span>
        </Menu.Item>
        <Menu.Item key="7">
          <Icon type="team" />
          <span className="nav-text">nav 7</span>
        </Menu.Item>
        <Menu.Item key="8">
          <Icon type="shop" />
          <span className="nav-text">nav 8</span>
        </Menu.Item>
      </Menu>
    </Sider>
    
    <Layout style={{ marginLeft: 200 }}>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/signin">Sign In</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/signup">Sign Up</Link></Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header> 
     <Route path="/terms" component={Terms} />
     <Route path="/signup" exact component={SignupWrapped} />
     <Route path="/" exact component={Landing} />
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  )
}
}

export default LayoutComponent;