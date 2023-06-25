import { Button, FormInstance } from 'antd';

import { useTaskStore } from '@/entities/task';

export const ResetFormButton = ({ form }: ResetFormProps): JSX.Element => {
  const handleResetTotalPoints = () => {
    useTaskStore.getState().resetTaskResults();

    form.resetFields();
  };

  return (
    <Button type={'default'} className="btn" onClick={handleResetTotalPoints}>
      Reset
    </Button>
  );
};

type ResetFormProps = {
  form: FormInstance;
};
