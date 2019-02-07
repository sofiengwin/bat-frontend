import * as React from 'react';
import {Modal, Button} from 'antd';
import styled from '../../styles';

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

class LoginModal extends React.Component<Props, State> {
  state: State = {loading: false}
  handleOk = () => {

  }

  render() {
    return (
      <Modal
        title="Basic Modal"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.props.handleCancel}
        footer={[]}
      >
        <SocialButtons>
          <Button style={{background: '#4267b2', ...buttonStyle}} icon="facebook" loading={this.state.loading} >Login With Facebook</Button>
          <Button style={{background: '#1dcaff', ...buttonStyle}} icon="twitter">Login With Twitter</Button>
          <Button style={{background: '#DB4437', ...buttonStyle}} icon="google">Login With Google</Button>
        </SocialButtons>
      </Modal>
    );
  }
}

export default LoginModal;