import React from 'react';
import Map from '../Map';
import { Link } from 'react-router-dom';
import { Divider,Breadcrumb, Icon, Layout, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const contact = () => {
  return (
    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

      <div style={{ height: '100vh', padding: 24, background: '#fff', textAlign: 'center' }}>
        <Breadcrumb style={{ textAlign: 'left' }}>
          <Breadcrumb.Item>
            <Link to="/"><Icon type="home" /></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/contact"><Icon type="phone" /></Link>
            &nbsp;<span>Contact</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Divider>Contact</Divider>
        <span style={{ textAlign: 'centre' }}></span>
        <div style={{ margin: '0 auto' }}>
          <Map />
        </div>
      </div>

    </Content>
  )
}

export default contact;