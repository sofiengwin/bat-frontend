import * as React from 'react';
import { Button } from 'antd';

const buttonStyle = {
  marginTop: '10px',
  color: '#fff',
  height: '50px',
  padding: '10px 0',
  fontWeigth: 'bolder'
}

const Google = () => {
  return (
    <Button
      style={{background: '#DB4437', ...buttonStyle}}
      icon="google"
      href='https://mila.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=uant5uiclfaft11m867m7qh08&redirect_uri=http://localhost:3001&identity_provider=Google&scope=openid+profile+aws.cognito.signin.user.admin'
    >
      Login With Google
    </Button>
  );
};

export default Google;
