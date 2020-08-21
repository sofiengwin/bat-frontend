import * as React from 'react';
import { Select } from 'antd';

const {Option} = Select;

interface Props {
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  value: string |undefined;
}

const SelectInput: React.FC<Props> = ({onChange, options, placeholder, value}) => {
  return (
    <div>
        <Select
          style={{ width: '100%' }}
          placeholder={placeholder}
          optionFilterProp="children"
          onChange={onChange}
          value={value}
        >
          {options.map((option, index) => (
            <Option value={option} key={index}>{option}</Option>
          ))}
        </Select>
    </div>
  );
}

export default SelectInput;