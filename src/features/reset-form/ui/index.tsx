import { Button, FormInstance, Space } from 'antd';

import styles from './styles.module.scss';

import { useTaskStore } from '@/entities/task';

export const ResetForm = ({ form }: ResetFormProps): JSX.Element => {
  const handleResetTotalPoints = () => {
    useTaskStore.getState().resetTotalPoints();

    form.resetFields();
  };

  return (
    <Space align="center" className={styles.space}>
      <Button type={'default'} className={styles.button} onClick={handleResetTotalPoints}>
        Reset
      </Button>
    </Space>
  );
};

interface ResetFormProps {
  form: FormInstance;
}
