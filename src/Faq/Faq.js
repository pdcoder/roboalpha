import React from 'react';
import {Link} from 'react-router-dom';
import { Collapse, Breadcrumb,Icon,Layout,Form, Input, Tooltip,  Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const {Panel} = Collapse;

const faq = () => {

    const customPanelStyle = {
        background: '#f7f7f7',
        borderRadius: 4,
        marginBottom: 24,
        border: 0,
        overflow: 'hidden',
        textAlign: 'left'
      };

      let text = "This is the answer to all the questions";

    return( 
       <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ height: '100vh',marginTop: 65, padding: 24, background: '#fff', textAlign: 'center' }}>
        <Breadcrumb style={{textAlign:'left'}}>
        <Breadcrumb.Item>
      <Link to="/"><Icon type="home" /></Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item >
    <Link to="/faq"><Icon type="form"/></Link>
      &nbsp;<span>FAQ</span>
    </Breadcrumb.Item>
  </Breadcrumb>


        <h1>Frequently Asked Questions</h1>
        <span style={{textAlign: 'centre'}}></span>
        <Collapse bordered={false}>
    <Panel header="What is your question?" key="1" style={customPanelStyle}>
      <p>{text}</p>
    </Panel>
    <Panel header="What is your question?" key="2" style={customPanelStyle}>
      <p>{text}</p>
    </Panel>
    <Panel header="What is your question?" key="3" style={customPanelStyle}>
      <p>{text}</p>
    </Panel>
  </Collapse>
        </div>
        </Content>
        
    )
}

export default faq;