import { Button } from 'antd';

import { useTaskStore } from '@/entities/task';
import { useNotification } from '@/shared/lib';

export const CreateReportButton = (): JSX.Element => {
  const { error, contextHolder } = useNotification();

  const validateReport = useTaskStore((state) => state.validateReport);

  const handleCreateReport = (): void => {
    if (!validateReport()) {
      return error('Please complete all mandatory fields');
    }

    // setIsReportOpen(true);
  };

  return (
    <>
      {contextHolder}
      <Button type={'primary'} className="btn" onClick={handleCreateReport}>
        Create Report
      </Button>
    </>
  );
};
