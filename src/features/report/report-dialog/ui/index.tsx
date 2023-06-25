import { useState } from 'react';
import { Button } from 'antd';

import { useNotification } from '@/shared/lib';
import { useTaskStore } from '@/entities/task';
import { ModalDialog } from '@/shared/ui';

export const ReportDialog = (): JSX.Element => {
  const [isReportOpen, setIsReportOpen] = useState(false);

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
      <ModalDialog
        open={isReportOpen}
        handleCopy={() => console.log('handleCopy')}
        handleClose={() => setIsReportOpen(false)}
      >
        demo
      </ModalDialog>
    </>
  );
};
