import * as React from 'react';
import { Button } from 'antd';

const buttonStyle = {
  marginTop: '10px',
  color: '#fff',
  height: '50px',
  padding: '10px 0',
  fontWeigth: 'bolder'
}

const Facebook = () => {
  return (
    <Button
      style={{background: '#4267b2', ...buttonStyle}} icon="facebook"
      href='https://mila.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=uant5uiclfaft11m867m7qh08&redirect_uri=http://localhost:3001&identity_provider=Facebook&scope=openid+profile+aws.cognito.signin.user.admin'
    >
      Login With Facebook
    </Button>
  );
};

export default Facebook;
