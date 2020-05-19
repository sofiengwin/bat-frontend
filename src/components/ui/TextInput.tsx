import * as React from 'react';
import {Input} from 'antd';

interface Props {
  value: string;
  defaultValue?: string;
  onChnage: () => void;
  addonBefore?: string | React.ReactNode;
  addonAfter?: string | React.ReactNode;
}

const TextInput: React.FC<Props> = ({value, defaultValue, onChnage, addonAfter, addonBefore}) => {
  return (
    <div>
      <Input
        value={value}
        defaultValue={defaultValue}
        onChange={onChnage}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
      />
    </div>
  );
}

export default TextInput;