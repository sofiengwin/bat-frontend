import * as React from 'react';
import {Modal} from 'antd';
import styled from '../../styles';
import { useMutation } from '@apollo/react-hooks';
import {QUERY as createOrFindUserQuery, IFindOrCreate, Response} from '../../data/graphql/findOrCreateUser';
import { gql, ApolloError } from 'apollo-boost';
import FacebookLogin from '../ui/Facebook';
import GoogleLogin from '../ui/Google';
import ErrorModal from '../ui/ErrorModal';
import {useFoster} from '../Fosterage';
import { useAppContext } from '../App';

interface Props {
  visible: boolean;
  handleCancel: () => void;
}

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
`;

const LoginModal:React.FC<Props> = ({visible, handleCancel, }) => {
  const {foster, reset} = useFoster();
  const {setAppLoading, addUser} = useAppContext()
  const onError = (_error: ApolloError) => {
    foster(() => <ErrorModal onCancel={reset} onOk={reset}/>)
    handleCancel()
  };
  const onCompleted = (data: Response) => {
    console.log({data});
    localStorage.setItem('session', data.createUser.userDetails.accessToken);
    addUser(data.createUser.userDetails.user);
    handleCancel();
  };

  const [findOrCreateUser, { loading }] = useMutation<Response, IFindOrCreate>(gql(createOrFindUserQuery), {onError, onCompleted });
  setAppLoading(loading);

  return (
    <Modal
      visible={visible}
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
          <FacebookLogin callback={findOrCreateUser} />
          <GoogleLogin callback={findOrCreateUser} />
        </>
      </SocialButtons>
    </Modal>
  );
}

export default LoginModal;