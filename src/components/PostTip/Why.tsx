import * as React from 'react';
import {
  Form, Select, Input, Button,
} from 'antd';
import { FormProps } from 'antd/lib/form';

const {TextArea} = Input;

class Why extends React.Component<{} & FormProps> {
  render() {
    // const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form onSubmit={() => console.log('submiting form')}>
          <Form.Item
            label="What your thought on the seleted match"
          >
            <TextArea placeholder='What your thought on the seleted match' autosize autoFocus/>
          </Form.Item>

          <Form.Item
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Why;