import { Layout, Menu, Icon, Carousel } from 'antd';
import './LayoutComponent.css';
import SignupWrapped from '../Signup/Signup';
import SigninWrapped from '../Login/Signin';
import React, { Component } from 'react';
import { Link,Route, withRouter, Switch,Router} from 'react-router-dom';
import Landing from '../Landing/Landing';
import Terms from '../Terms/Terms';
import Profile from '../Profile/Profile';
import Opportunity from '../Opportunity/Opportunity';
import Dashboard from '../Dashboard/Dashboard';
import Faq from '../Faq/Faq';
import Contact from '../Contact/Contact';
import PrivateRoute from '../PrivateRoute';
const { Header, Content, Footer, Sider } = Layout;
class LayoutComponent extends Component{
constructor(props){
  super(props);
  this.state = {
    collapsed: false,
    auth: true
  };
}
componentDidMount(){
  const {pathname} = this.props.location;
  console.log(pathname);
}
onCollapse = (collapsed) => {
  this.setState({ collapsed });
}
render(){
  
  return(
  <Layout style={{height: '100vh'}}> 
   { this.state.auth ?  <Sider  style={{ overflow: 'auto', left: 0 }}
    breakpoint="sm"
    collapsedWidth="70"
    collapsible
    collapsed={this.state.collapsed}
    onCollapse={this.onCollapse} >
      <div className="logo" />
      <Menu  theme="dark" mode="inline">
        <Menu.Item style={{marginTop: '0'}} key="1"><Link to="/profile">
          <Icon type="user" />
          <span className="nav-text">Profile</span></Link>
        </Menu.Item>
        <Menu.Item key="2"><Link to="/dashboard">
          <Icon type="dashboard" />
          <span className="nav-text">Dashboard</span></Link>
        </Menu.Item>
        <Menu.Item key="3"><Link to="/opportunity">
          <Icon type="smile" />
          <span className="nav-text">Opportunities</span></Link>
        </Menu.Item>
      </Menu>
    </Sider>
    : null}
    <Layout>
    <Header collapsible style={{ overflow: 'auto',position: 'fixed',width: '100%', padding:'0' }}>
      <Menu 
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/signin">Sign In</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/contact">Contact</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/faq">FAQ</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/terms">Privacy Policy</Link></Menu.Item>

      </Menu>
    </Header> 
     <Route path="/faq" component={Faq} />
     <Route path="/contact" component={Contact} />
     <Route path="/terms" component={Terms} />
     <Route path="/signin" exact component={SigninWrapped} />
     <Route path="/signup" exact component={SignupWrapped} />
     <PrivateRoute auth={this.state.auth} path="/profile" component={Profile} />
     <PrivateRoute auth={this.state.auth} path="/dashboard" component={Dashboard} />
     <PrivateRoute auth={this.state.auth} path="/opportunity" component={Opportunity} />
     <Route path="/" exact component={Landing} />
     




      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  )
}
}

export default withRouter(LayoutComponent);