import * as React from 'react';
import {Input, Form} from 'antd';

interface Props {
  value: string | number;
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addonBefore?: string | React.ReactNode;
  addonAfter?: string | React.ReactNode;
}

const TextInput: React.FC<Props> = ({value, defaultValue, onChange, addonBefore}) => {
  return (
    <Form.Item label={addonBefore} colon>
      <Input
        placeholder="input placeholder"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </Form.Item>
  );
}

export default TextInput;