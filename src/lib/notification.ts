import {notification } from 'antd';

const openNotification = (title: string, description: string) => {
  notification.open({
    message: title,
    description: description,
    duration: 1000,
  });
};

export default openNotification;