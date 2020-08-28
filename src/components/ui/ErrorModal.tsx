import * as React from 'react';
import { Modal, Result, Button } from 'antd';

interface Props {
  onOk: () => void;
  onCancel: () => void;
  show: boolean;
}

const ErrorModal: React.FC<Props> = ({onCancel, onOk, show}) => {
  return (
    <Modal
      visible={show}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
      zIndex={10000}
    >
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={
          <Button type="primary" key="console" onClick={onOk}>
            Go Console
          </Button>
        }
      />
    </Modal>
  )
}

export default ErrorModal;