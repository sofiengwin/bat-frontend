//@ts-nocheck
import * as React from 'react';
import {Modal, Button} from 'antd';
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import styled from '../../styles';
import useService from '../../lib/useService';
import { useMutation } from '@apollo/react-hooks';
import {QUERY as createOrFindUserQuery, IFindOrCreate} from '../../data/graphql/findOrCreateUser';
import { gql } from 'apollo-boost';
import {Fields as IUser} from '../../models/User'

interface Props {
  visible: boolean;
  handleCancel: () => void;
}

interface State {
  loading: boolean;
}

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const buttonStyle = {
  marginTop: '10px',
  color: '#fff',
  height: '50px',
  padding: '10px 0',
  fontWeigth: 'bolder'
}

const LoginModal:React.FC<Props> = ({visible, handleCancel, }) => {
  const {sessionService} = useService();
  const [findOrCreateUser, { data, error }] = useMutation<IUser, IFindOrCreate>(gql(createOrFindUserQuery));
  console.log({data, error})

  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={() => undefined}
      onCancel={handleCancel}
      footer={[]}
    >
      <SocialButtons>
        <FacebookLogin
          appId={'1950306921766824'}
          autoLoad={false}
          fields="name,email,picture"
          callback={(response: any) => {
            findOrCreateUser({
              name: response.name,
              email: response.email,
              accessToken: response.accessToken,
              tokenId: response.signedRequest,
              providerId: response.userId,
              imageUrl: response.picture.url,
            })
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

<         GoogleLogin
          clientId="767047999329-q4gohqcv0vr3nsmsbq93v09tsm25jg0n.apps.googleusercontent.com"
          onSuccess={(res) => findOrCreateUser({
            name: res.profileObj.name,
            email: res.profileObj.email,
            accessToken: res.accessToken,
            tokenId: res.tokenId,
            providerId: res.profileObj.googleId,
            imageUrl: res.profileObj.imageUrl,
          })}
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
      </SocialButtons>
    </Modal>
  );
}

export default LoginModal;