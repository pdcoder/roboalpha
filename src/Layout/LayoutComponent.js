import { Layout, Menu, Icon, Carousel } from 'antd';
import './LayoutComponent.css';
import SignupWrapped from '../Signup/Signup';
import SigninWrapped from '../Login/Signin';
import React, { Component } from 'react';
import { Link,Route, withRouter, Switch,Router} from 'react-router-dom';
import Landing from '../Landing/Landing';
import Terms from '../Terms/Terms';
import Faq from '../Faq/Faq';
import Contact from '../Contact/Contact';

const { Header, Content, Footer, Sider } = Layout;
class LayoutComponent extends Component{
constructor(){
  super();
  this.state = {
    collapsed: false,
  };
}

onCollapse = (collapsed) => {
  this.setState({ collapsed });
}
render(){
  return(
  <Layout style={{height: '100vh'}}> 
    <Sider  style={{ overflow: 'auto', left: 0 }}
    collapsible
    collapsed={this.state.collapsed}
    onCollapse={this.onCollapse} >
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
    
    <Layout>
    <Header style={{ overflow: 'auto',position: 'fixed',width: '100%', padding:'0' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/signin">Sign In</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/signup">Sign Up</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/terms">Privacy Policy</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/contact">Contact Us</Link></Menu.Item>
        <Menu.Item key="6"><Link to="/faq">Frequently asked Questionss</Link></Menu.Item>

      </Menu>
    </Header> 
     <Route path="/faq" component={Faq} />
     <Route path="/contact" component={Contact} />
     <Route path="/terms" component={Terms} />
     <Route path="/signin" exact component={SigninWrapped} />
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