import * as React from 'react';
import {Modal} from 'antd';
import styled from '../../styles';

import FacebookLogin from '../ui/Facebook';
import GoogleLogin from '../ui/Google';
import {GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { provider, auth } from '../../lib/firebase';


interface Props {
  visible: boolean;
  handleCancel: () => void;
  handleSuccess: () => void;
}

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
`;

const LoginModal:React.FC<Props> = ({visible, handleCancel, handleSuccess}) => {
  const startLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log({result})
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        console.log({error})
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    // setAppLoading(false)
  };

  return (
    <Modal
      open={visible}
      onOk={() => undefined}
      onCancel={handleCancel}
      footer={[]}
      mask={true}
      destroyOnClose={true}
      maskClosable={false}
      centered
    >
      <SocialButtons>
        <>
          <FacebookLogin />
          <GoogleLogin startLogin={startLogin}/>
        </>
      </SocialButtons>
    </Modal>
  );
}

export default LoginModal;
