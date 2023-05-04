import * as React from 'react';
import {Modal} from 'antd';
import styled from '../../styles';

import FacebookLogin from '../ui/Facebook';
import GoogleLogin from '../ui/Google';
import {signInWithPopup } from 'firebase/auth';
import { provider, auth } from '../../lib/firebase';
import { useAppContext } from '../App';
import { IUser } from '../../models/User';


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
  const {addUser} = useAppContext()
  const startLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        addUser({
          id: user.uid,
          email: user.email,
          name: user.displayName,
          avatarUrl: user.photoURL
        } as IUser)
        handleSuccess()
      }).catch((error) => {
        console.log('Error Login', {error})
      });
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
