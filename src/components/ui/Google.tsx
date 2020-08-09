import * as React from 'react';
import GoogleLogin from 'react-google-login';
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
    <GoogleLogin
      clientId="767047999329-q4gohqcv0vr3nsmsbq93v09tsm25jg0n.apps.googleusercontent.com"
      onSuccess={(res) => {
        console.log({res})
        const {profileObj, tokenId, accessToken}: any = res;
        console.log({profileObj, tokenId, accessToken})
        callback({
          variables: {
            name: profileObj.name,
            email: profileObj.email,
            accessToken: accessToken,
            tokenId: tokenId,
            providerId: profileObj.googleId,
            avatarUrl: profileObj.imageUrl,
          },
        })
      }}
      onFailure={(err) => console.log({err})}
      render={renderProps => (
        <Button
          style={{background: '#DB4437', ...buttonStyle}}
          icon="google"
          onClick={renderProps.onClick}
          // disabled={renderProps.disabled}
        >
          Login With Google
        </Button>
      )}
    />
  );
};

export default Google;