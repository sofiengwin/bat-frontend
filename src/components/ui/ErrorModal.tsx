import * as React from 'react';
import { Modal, Result, Button } from 'antd';

interface Props {
  onOk: () => void;
  onCancel: () => void;
  show: boolean;
  message?: string;
  actionButtonText?: string;
}

const ErrorModal: React.FC<Props> = ({onCancel, onOk, show, message, actionButtonText}) => {
  return (
    <Modal
      open={show}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
      zIndex={10000}
    >
      <Result
        status="warning"
        title={message || "There are some problems with your operation."}
        extra={
          <Button type="primary" key="console" onClick={onOk}>
            {actionButtonText || 'Close'}
          </Button>
        }
      />
    </Modal>
  )
}

export default ErrorModal;
