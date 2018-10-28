import React, { Component } from 'react';
import { Layout, Menu, Icon, Carousel, Input } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class Signin extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="example-input">
            <Input placeholder="Please enter something" />
            <Input placeholder="Please enter something" />
            <Input placeholder="Please enter something" />
            </div>
        )
    }
}
export default Signin;