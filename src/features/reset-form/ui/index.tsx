import { Button, FormInstance, Space } from 'antd';

import { useTaskStore } from '@/entities/task';

export const ResetForm = ({ form }: IProps): JSX.Element => {
  const handleResetTotalPoints = () => {
    useTaskStore.getState().resetTotalPoints();

    form.resetFields();
  };

  return (
    <Space align="center" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Button type={'default'} style={{ width: '200px' }} onClick={handleResetTotalPoints}>
        Reset
      </Button>
    </Space>
  );
};

interface IProps {
  form: FormInstance;
}
