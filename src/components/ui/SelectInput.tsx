import * as React from 'react';
import { Select } from 'antd';

const {Option} = Select;

interface Props {
  onChange: () => void;
  options: string[];
}

const SelectInput: React.FC<Props> = ({onChange, options}) => {
  return (
    <div>
        <Select
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
        >
          {options.map((option, index) => (
            <Option value={option} key={index}>{option}</Option>
          ))}
        </Select>
    </div>
  );
}

export default SelectInput;