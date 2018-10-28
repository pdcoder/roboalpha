import React from 'react';
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
      };

      let text = "This is the answer to all the questions";

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
        <span style={{textAlign: 'centre'}}><Icon type="question" theme="outlined" /></span>
        <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
      <p>{text}</p>
    </Panel>
  </Collapse>
        </div>
        </Content>
        </div>
    )
}

export default faq;