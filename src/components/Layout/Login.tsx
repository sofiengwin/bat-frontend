import * as React from 'react';
import {Modal, Spin} from 'antd';
import styled from '../../styles';
import { useMutation } from '@apollo/react-hooks';
import {QUERY as createOrFindUserQuery, IFindOrCreate} from '../../data/graphql/findOrCreateUser';
import { gql } from 'apollo-boost';
import {Fields as IUser} from '../../models/User'
import FacebookLogin from '../ui/Facebook';
import GoogleLogin from '../ui/Google';

interface Props {
  visible: boolean;
  handleCancel: () => void;
}

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const LoginModal:React.FC<Props> = ({visible, handleCancel, }) => {
  const [findOrCreateUser, { data, error, called, loading }] = useMutation<IUser, IFindOrCreate>(gql(createOrFindUserQuery), {onCompleted: (data: IUser) => console.log({data})});
  console.log({data, error, called, loading})

  return (
    <Modal
      visible={visible}
      onOk={() => undefined}
      onCancel={handleCancel}
      footer={[]}
    >
      <SocialButtons>
        {called && loading ? (
          <div>
            <Spin size="large" />
          </div>
        ) : (
        <>
          <FacebookLogin callback={findOrCreateUser} />
          <GoogleLogin callback={findOrCreateUser} />
        </>)}
      </SocialButtons>
    </Modal>
  );
}

export default LoginModal;