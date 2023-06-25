import { notification } from 'antd';

const enum NotificationType {
  Success = 'success',
  Error = 'error',
}

export const useNotification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType, description: string) => {
    api[type]({
      message: type === NotificationType.Error ? 'Error' : 'Success',
      description: description,
    });
  };

  const success = (description: string) => {
    openNotificationWithIcon(NotificationType.Success, description);
  };

  const error = (description: string) => {
    openNotificationWithIcon(NotificationType.Error, description);
  };

  return {
    success,
    error,
    contextHolder,
  };
};
