import * as React from 'react';
import {Modal} from 'antd';
import Spinner from '../ui/Spinner';

interface Props {
  visible: boolean;
}

const AppLoadingModal: React.FC<Props> = ({visible }) => {
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
      <Spinner />
    </Modal>
  );
}

export default AppLoadingModal; 