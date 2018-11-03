import React, { Component } from 'react';
import { Breadcrumb, Layout, Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import './Signin.css';

const { Header, Content, Footer, Sider } = Layout;

const FormItem = Form.Item;
class Signin extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ height: '100vh', marginTop: 65, padding: 24, background: '#fff', textAlign: 'center' }}>
          <Breadcrumb style={{ textAlign: 'left' }}>
            <Breadcrumb.Item>
              <Link to="/"><Icon type="home" /></Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <Link to="/signin"><Icon type="user" /></Link>
              &nbsp;<span>Sign in</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <h1>Sign In</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <br />
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
          </Button>
              <br />
              Or <Link to="/signup">Register now!</Link>
            </FormItem>
          </Form>
        </div>
      </Content>
    );
  }
}
const SigninWrapped = Form.create()(Signin);


export default SigninWrapped;