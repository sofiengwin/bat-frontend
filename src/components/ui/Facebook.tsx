import * as React from 'react';
import { Button } from 'antd';
import { IFindOrCreate } from '../../data/graphql/findOrCreateUser';
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

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
    <FacebookLogin
      appId={'1950306921766824'}
      autoLoad={false}
      fields="name,email,picture"
      callback={(response: any) => {
        callback({variables: {
          name: response.name,
          email: response.email,
          accessToken: response.accessToken,
          tokenId: response.signedRequest,
          providerId: response.userId,
          avatarUrl: response.picture.url,
        }})
      }}
      onClick={() => undefined}
      render={(renderProps: any) => (
        <Button
          style={{background: '#4267b2', ...buttonStyle}} icon="facebook"
          onClick={renderProps.onClick}
        >
          Login With Facebook
        </Button>
      )}
    />
  );
};

export default Facebook;