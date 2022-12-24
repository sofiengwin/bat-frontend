import {notification } from 'antd';

const openNotification = (title: string, description: string) => {
  notification.open({
    message: title,
    description: description,
    duration: 1000,
    style: {
      background: '#00801c99',
    }
  });
};

export default openNotification;