import React from 'react';
import { Breadcrumb,Icon,Layout,Form, Input, Tooltip,  Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const contact = () => {
    return(
        <div>
        <Breadcrumb>
    <Breadcrumb.Item href="">
      <Icon type="home" />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <Icon type="user" />
      <span>Faq</span>
    </Breadcrumb.Item>
  </Breadcrumb>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ marginTop: 65, padding: 24, background: '#fff', textAlign: 'center' }}>
        <h1>Frequently Asked Questions</h1>
        <span style={{textAlign: 'centre'}}></span>
        </div>
        </Content>
        </div>
    )
}

export default contact;