import React from 'react';
import {Link} from 'react-router-dom';

import {Breadcrumb, Layout,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const terms = () => {
    return(
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ height: '100vh',marginTop: 65, padding: 24, background: '#fff', textAlign: 'center' }}>
        <Breadcrumb style={{textAlign:'left'}}>
        <Breadcrumb.Item>
      <Link to="/"><Icon type="home" /></Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
    <Link to="/terms"><Icon type="form"/></Link>
      &nbsp;<span>Terms & Cond.</span>
    </Breadcrumb.Item>
  </Breadcrumb>

        <h1>Terms and Conditions</h1>
        </div>
        </Content>
    )
}

export default terms;