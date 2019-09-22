import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class App extends React.Component {
  constructor(){
    super();
    this.state = { } ; 
  }

 componentDidMount = async() => {
  const response = await window.fetch('/data', { method: 'GET'});
  const body = await response.json();
 this.setState( { data : body.data});
}

render(){
  const { getFieldDecorator } = this.props.form;
  const  result = this.state.data ; 
  return (
    <div>
     {result}

     <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}
}

export default  Form.create({ name: 'normal_login' })(App);;
