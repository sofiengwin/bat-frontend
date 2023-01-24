import * as React from 'react';
import {Modal} from 'antd';
import styled from '../../styles';

import FacebookLogin from '../ui/Facebook';
import GoogleLogin from '../ui/Google';


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
          <GoogleLogin />
        </>
      </SocialButtons>
    </Modal>
  );
}

export default LoginModal;
