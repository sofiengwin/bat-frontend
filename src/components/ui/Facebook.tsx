import * as React from 'react';
import { Button } from 'antd';
import { IFindOrCreate } from '../../data/graphql/findOrCreateUser';

interface Props {
  callback: ({variables}: {variables: IFindOrCreate}) => void;
}

const buttonStyle = {
  marginTop: '10px',
  color: '#fff',
  height: '50px',
  padding: '10px 0',
  fontWeigth: 'bolder'
}

const Facebook: React.FC<Props> = ({callback}) => {
  return (
    <Button
    style={{background: '#4267b2', ...buttonStyle}} icon="facebook"
    // onClick={renderProps.onClick}
  >
    Login With Facebook
  </Button>
  );
};

export default Facebook;