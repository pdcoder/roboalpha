import React from 'react';
import { Layout,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const privacyPolicy = () => {
    return(
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ marginTop: 65, padding: 24, background: '#fff', textAlign: 'center' }}>
        <h1>Terms and Conditions</h1>
        </div>
        </Content>
    )
}

export default privacyPolicy;