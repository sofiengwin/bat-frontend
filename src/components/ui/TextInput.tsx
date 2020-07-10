import * as React from 'react';
import {Input, Form} from 'antd';

interface Props {
  value: string | number;
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addonBefore?: string | React.ReactNode;
  addonAfter?: string | React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
}

const TextInput: React.FC<Props> = ({value, defaultValue, onChange, addonBefore, placeholder, disabled}) => {
  return (
    <Form.Item label={addonBefore} colon>
      <Input
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      />
    </Form.Item>
  );
}

export default TextInput;