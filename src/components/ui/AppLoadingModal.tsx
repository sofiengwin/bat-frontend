import * as React from 'react';
import {Modal, Spin} from 'antd';
import styled from '../../styles';

interface Props {
  visible: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
`;

const AppLoadingMoadl: React.FC<Props> = ({visible }) => {
  return (
    <Modal
      visible={visible}
      footer={null}
      mask={true}
      destroyOnClose={true}
      maskClosable={false}
      centered
      closable={false}
      zIndex={9000}
    >
      <Container>
        <Spin size="large" />
      </Container>
    </Modal>
  );
}

export default AppLoadingMoadl; 