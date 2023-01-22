import * as React from 'react';
import {Modal} from 'antd';
import styled from '../../styles';
import {QUERY as createOrFindUserQuery, IFindOrCreate, Response} from '../../data/graphql/findOrCreateUser';
import { gql, useMutation } from "@apollo/client";

import FacebookLogin from '../ui/Facebook';
import GoogleLogin from '../ui/Google';
import ErrorModal from '../ui/ErrorModal';
import {useFoster} from '../Fosterage';
import { useAppContext } from '../App';

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
  const {foster, reset} = useFoster();
  const {setAppLoading, addUser} = useAppContext()
  const onError = (_error: any) => {
    foster(() => <ErrorModal onCancel={reset} onOk={reset} show={true}/>)
    handleCancel()
  };
  const onCompleted = (data: Response) => {
    localStorage.setItem('session', data.createUser.userDetails.accessToken);
    addUser(data.createUser.userDetails.user);
    handleSuccess();
  };

  const [findOrCreateUser, { loading }] = useMutation<Response, IFindOrCreate>(gql(createOrFindUserQuery), {onError, onCompleted });
  setAppLoading(loading);

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
