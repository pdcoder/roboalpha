import React, { Component } from 'react';
import { Layout, Menu, Icon, Carousel } from 'antd';
import './Landing.css';
const { Header, Content, Footer, Sider } = Layout;



class Landing extends Component {
  constructor() {
    super();
    this.state = {
      auth: true
    };
  }

  render() {
    return (
      <div className="landing">
       
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
            ...
              <br />
            Really
              <br />...<br />...<br />...<br />
            long
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
            content
            </div>
        </Content>
 
      </div>

    )
  }
}

export default Landing;