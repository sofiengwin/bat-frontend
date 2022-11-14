import * as React from 'react';
import { Button } from 'antd';
import { IFindOrCreate } from '../../data/graphql/findOrCreateUser';

const buttonStyle = {
  marginTop: '10px',
  color: '#fff',
  height: '50px',
  padding: '10px 0',
  fontWeigth: 'bolder'
}

interface Props {
  callback: ({variables}: {variables: IFindOrCreate}) => void;
}

const Google: React.FC<Props> = ({callback}) => {
  return (
    <Button
      style={{background: '#DB4437', ...buttonStyle}}
      icon="google"
      // onClick={}
      // disabled={renderProps.disabled}
    >
      Login With Google
    </Button>
  );
};

export default Google;